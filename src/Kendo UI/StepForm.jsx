import React, { useState } from 'react'
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Redirect } from 'react-router-dom'
import { Stepper } from "@progress/kendo-react-layout";
import {LogicwindDetails} from "./components/LogicwindDetails";
import {OfficialDetails} from "./components/OfficialDetails";
import {PersonalDetails} from "./components/PersonalDetails";
const stepPages = [PersonalDetails, OfficialDetails, LogicwindDetails];

export default function StepForm() {
  const [redirect, setRedirect] = useState(false)
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    {
      label: "Account Details",
      isValid: undefined,
    },
    {
      label: "Personal Details",
      isValid: undefined,
    },
    {
      label: "Payment Details",
      isValid: undefined,
    },
  ]);
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const onStepSubmit = React.useCallback(
    (event) => {
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);
      if (!isValid) {
        return;
      }
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep) {
        alert(JSON.stringify(values));
        setRedirect(true)  
      }
    },
    [steps, isLastStep, step, lastStepIndex]
  );
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {redirect && <Redirect to='/cards'/>}
      <Stepper value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <FormElement
              style={{
                width: 480,
              }}
            >
              {stepPages[step]}
              <span
                style={{
                  marginTop: "40px",
                }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={"k-form-buttons k-buttons-end"}
              >
                <span
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Step {step + 1} of 3
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{
                        marginRight: "16px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    primary={true}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  )
}

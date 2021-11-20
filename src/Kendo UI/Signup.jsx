import React, { useState } from 'react'
import { Form, Field, FormElement, FieldWrapper } from "@progress/kendo-react-form";
import { Redirect } from 'react-router-dom'
import { FloatingActionButton, DropDownButton } from "@progress/kendo-react-buttons";
import { RangeSlider, SliderLabel } from "@progress/kendo-react-inputs";
import { Rating } from "@progress/kendo-react-inputs";
import {
  FormDatePicker,
  FormInput,
  FormCheckbox,
  FormMaskedTextBox,
  FormRadioGroup,
  FormTextArea,
  FormUpload
} from "./components/form-components";
import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  arrivalDateValidator,
  userNameValidator,
  requiredValidator
} from "./components/Validators";
const genders = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];
const items = [
  "Linkedin",
  "Youtube",
  "Instagram",
  "Some one recommended",
  "other"
]
export default function Forms() {
  const [redirect, setRedirect] = useState(false)
  const handleSubmit = (dataItem) => {
    alert(JSON.stringify(dataItem, null, 2));
    setRedirect(true)  
  }
  const [added, setAdded] = React.useState(false);
  const [item, setItem] = React.useState('');
  const handleClick = () => {
    setAdded(!added);
  };
  return (
    <div style={{overflow: "auto"}}>
      <Form
        style={{height: "auto"}}
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement
            style={{
              width: 400,
            }}
          >
          {redirect && <Redirect to='/cards'/>}
            <fieldset className={"k-form-fieldset"}>
              <Field
                id={"fullName"}
                name={"fullName"}
                label={"Full Name"}
                component={FormInput}
                validator={nameValidator}
              />
              <Field
                id={"username"}
                name={"username"}
                label={"User Name"}
                component={FormInput}
                validator={userNameValidator}
              />
              <Field
                id={"phoneNumber"}
                name={"phoneNumber"}
                label={"Phone Number"}
                mask={"(+00) 0000000000"}
                hint={"Note: Your active phone number."}
                component={FormMaskedTextBox}
                validator={phoneValidator}
              />
              <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                hint={"Note: Enter your personal email address."}
                type={"email"}
                component={FormInput}
                validator={emailValidator}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Field
                  id={"BirthDate"}
                  name={"BirthDate"}
                  label={"Birth Date"}
                  hint={"Note: Shouldn't be greater than today"}
                  component={FormDatePicker}
                  validator={arrivalDateValidator}
                  wrapperStyle={{
                    width: "90%",
                    marginRight: "18px",
                  }}
                />
              </div>
              <FormElement>
                <Field
                  id={"gender"}
                  name={"gender"}
                  label={"Gender"}
                  layout={"horizontal"}
                  component={FormRadioGroup}
                  data={genders}
                  validator={requiredValidator}
                />
              </FormElement>
              <span className={"k-form-separator"} />
              <FormElement>
                <Field
                  id={"avatar"}
                  name={"avatar"}
                  label={"Add your image"}
                  component={FormUpload}
                  validator={requiredValidator}
                />
              </FormElement>
              <span className={"k-form-separator"} />
              <FormElement>
                <FieldWrapper validator={requiredValidator}>
                  <span>
                    Where did you hear about logicwind{' '}
                    <DropDownButton text={item || "Select"} items={items} onItemClick={(e) => setItem(e.item)} />
                  </span>
                </FieldWrapper>
              </FormElement>
              <span className={"k-form-separator"} />
              <FormElement>
              <FieldWrapper validator={requiredValidator}>
                Experience in years{ ' '}
                <RangeSlider
                  defaultValue={{
                    start: 0,
                    end: 4,
                  }}
                  step={1}
                  min={0}
                  max={4}
                >
                  {[0,1,2,3,4].map((perc, i) => (
                    <SliderLabel key={i} position={perc}>
                      {perc.toString()}
                    </SliderLabel>
                  ))}
                </RangeSlider>
                </FieldWrapper>
              </FormElement>
              <span className={"k-form-separator"} />
              <Field
                id={"comments"}
                name={"comments"}
                label={"Comments"}
                optional={true}
                component={FormTextArea}
              />
              <span className={"k-form-separator"} />
              <FormElement>
                Rate Logicwind
                <Field
                  id={"star"}
                  name={"star"}
                  label={"Star"}
                  component={Rating}
                  validator={requiredValidator}
                />
              </FormElement>
              <Field
                id={"terms"}
                name={"terms"}
                label={"I agree to provide my details to logicwind"}
                component={FormCheckbox}
                validator={termsValidator}
              />
              <div className="k-form-buttons">
                <FloatingActionButton
                  type="submit" 
                  text={"Register"}
                  icon={added ? "check" : undefined}
                  align={{
                    horizontal: "end",
                    vertical: "bottom",
                  }}
                  positionMode="absolute"
                  onClick={handleClick}
                  disabled={!formRenderProps.allowSubmit}
                />
                <FloatingActionButton
                  text={"Clear"}
                  align={{
                    horizontal: "start",
                    vertical: "bottom",
                  }}
                  positionMode="absolute"
                  onClick={formRenderProps.onFormReset}
                />
                {/* <Button
                  primary={true}
                  type={"submit"}
                  disabled={!formRenderProps.allowSubmit}
                >
                  Register
                </Button> */}
                {/* <Button onClick={formRenderProps.onFormReset}>Clear</Button> */}
              </div>
            </fieldset>
          </FormElement>
        )}
      />
      
    </div>
  )
}

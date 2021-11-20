import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput } from "./components/form-components";
import { userNameValidator, emailValidator } from "./components/Validators";

export default function Signin() {
  const [redirect, setRedirect] = useState(false)
  const handleSubmit = (dataItem) => {
    alert(JSON.stringify(dataItem, null, 2));
    setRedirect(true)  
  }
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: 400,
          }}
        >
          {redirect && <Redirect to='/cards'/>}
          <Field
            id={"username"}
            name={"username"}
            label={"User Name"}
            component={FormInput}
            validator={userNameValidator}
          />
          <Field
            id={"email"}
            name={"email"}
            label={"Email"}
            type={"email"}
            component={FormInput}
            validator={emailValidator}
          />
          <div className="k-form-buttons">
            <Button
              primary={true}
              type={"submit"}
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </Button>
            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
          </div>
        </FormElement>
      )}
    />
  )
}

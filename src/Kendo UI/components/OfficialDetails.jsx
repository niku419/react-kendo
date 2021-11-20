import React from 'react'
import { Field, FormElement } from "@progress/kendo-react-form";
import {
  FormInput,
  FormMaskedTextBox,
  FormUpload
} from "./form-components";
import {
  emailValidator,
  userNameValidator,
  phoneValidator,
  requiredValidator
} from "./Validators";

export const OfficialDetails =

    <div>
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
    </div>

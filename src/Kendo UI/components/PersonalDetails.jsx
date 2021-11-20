import React from 'react'
import { Field, FormElement } from "@progress/kendo-react-form";
import {
  FormDatePicker,
  FormInput,
  FormRadioGroup,
} from "./form-components";
import {
  nameValidator,
  arrivalDateValidator,
  requiredValidator
} from "./Validators";

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

export const PersonalDetails =

    <div>
      <Field
        id={"fullName"}
        name={"fullName"}
        label={"Full Name"}
        component={FormInput}
        validator={nameValidator}
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
    </div>

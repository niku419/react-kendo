import React from 'react'
import { Field, FormElement, FieldWrapper } from "@progress/kendo-react-form";
import { RangeSlider, SliderLabel } from "@progress/kendo-react-inputs";
import { Rating } from "@progress/kendo-react-inputs";
import {
  FormCheckbox,
  FormTextArea,
} from "./form-components";
import {
  termsValidator,
  requiredValidator
} from "./Validators";
  // const items = [
  //   "Linkedin",
  //   "Youtube",
  //   "Instagram",
  //   "Some one recommended",
  //   "other"
  // ]
export const LogicwindDetails = 
  
    <div>
      {/* <FormElement>
        <FieldWrapper validator={requiredValidator}>
          <span>
            Where did you hear about logicwind{' '}
            <DropDownButton text={item || "Select"} items={items} onItemClick={(e) => setItem(e.item)} />
          </span>
        </FieldWrapper>
      </FormElement> */}
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
    </div>
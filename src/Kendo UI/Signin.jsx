import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Field, FormElement, FieldWrapper } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput } from "./components/form-components";
import { userNameValidator, emailValidator, requiredValidator } from "./components/Validators";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { stateData, districtData } from "./components/data";

const defaultItemState = {
  stateName: "Select State ...",
};
const defaultItemDistrict = {
  districtName: "Select District ...",
};


export default function Signin() {
  const [redirect, setRedirect] = useState(false)
  const [state, setState] = React.useState({
    selectedState: defaultItemState,
    district: null,
    states: stateData,
    districts: []
  });
  const stateChange = (event) => {
    const selected = event.target.value;
    console.log(selected)
    const dists = districtData.filter((district) => district.stateId === selected.stateId);
    setState({
      ...state,
      selectedState: selected,
      districts: dists,
      district: null,
    });
  };
  const districtChange = (event) => {
    setState({ ...state, district: event.target.value });
  };
  const handleSubmit = (dataItem) => {
    const submitData = {
      ...dataItem,
      state: state.selectedState.stateName,
      district: state.district.districtName
    }
    alert(JSON.stringify(submitData));
    setRedirect(true)  
  }
  const hasState = state.selectedState?.stateName !== defaultItemState.stateName
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
          { <Field
            id={"email"}
            name={"email"}
            label={"Email"}
            type={"email"}
            component={FormInput}
            validator={emailValidator}
          />}
          <FormElement>
            <FieldWrapper validator={requiredValidator}>
              <div
                style={{
                  display: "inline-block",
                }}
              >
                States
                <br />
                <DropDownList
                  data={stateData}
                  textField="stateName"
                  onChange={stateChange}
                  defaultItem={defaultItemState}
                  value={state.selectedState}
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "30px",
                }}
              >
                Districts
                <br />
                <DropDownList
                  disabled={!hasState}
                  data={state.districts}
                  textField="districtName"
                  onChange={districtChange}
                  defaultItem={defaultItemDistrict}
                  value={state.district}
                />
              </div>
            </FieldWrapper>
          </FormElement>
          <div className="k-form-buttons">
            <Button
              primary={true}
              type={"submit"}
              disabled={formRenderProps.allowSubmit && state.district === null}
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

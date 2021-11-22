import React from 'react'
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { stateData, districtData } from "./components/data";
const defaultItemState = {
  stateName: "Select State ...",
};
const defaultItemDistrict = {
  districtName: "Select District ...",
};

export default function ConditionalDropdown() {
  const [state, setState] = React.useState({
    selectedState: null,
    district: null,
    states: stateData,
  });

  const stateChange = (event) => {
    const selected = event.target.value;
    const dists = districtData.filter(
      (district) => district.stateId === selected.stateId
    );
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

  const states = state.states;
  // const districts = state.districts;
  const hasState = states && state !== defaultItemState;
  // const hasDistrict = districts && districts !== defaultItemDistrict;
  return (
    <>
      <div
        style={{
          display: "inline-block",
        }}
      >
        States
        <br />
        <DropDownList
          data={stateData}
          textField="StateName"
          onChange={stateChange}
          defaultItem={defaultItemState}
          value={states}
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
    </>
  );
}

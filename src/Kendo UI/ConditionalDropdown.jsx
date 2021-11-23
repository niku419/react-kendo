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
    selectedState: defaultItemState,
    district: null,
    states: stateData,
    districts: []
  });
  const stateChange = (event) => {
    const selected = event.target.value;
    console.log(selected)
    const dists = districtData.filter((district) => district.stateId === selected.stateId);
    console.log(dists);
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
  const hasState = stateData && (state.selectedState?.stateName !== defaultItemState.stateName);
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
    </>
  );
}

import React from "react";

const DropDownMenu = ({
  selectedOption,
  setSelectedOption,
  options,
  defaultValue
}) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      <option defaultValue={defaultValue}>{defaultValue}</option>
      {options.map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default DropDownMenu;

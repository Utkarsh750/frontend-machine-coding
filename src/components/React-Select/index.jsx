import React from "react";
import Select from "react-select";

const ReactSelectApp = () => {
  const options = [
    { values: "vanilla", lable: "Vanilla" },
    { values: "strawberry", lable: "Strawberry" },
    { values: "butter-scotch", lable: "Butter-Scotch" },
  ];

  const customStyle = {
    control: (provided) => ({
      ...provided,
      width: "400px",
      borderRadius: "8px",
      boxShadow: "none",
      textAlign: "left",
    }),
    option: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
    }),
  };
  return (
    <div>
      <h2>This is React Select App</h2>
      <Select options={options} styles={customStyle} />
    </div>
  );
};

export default ReactSelectApp;

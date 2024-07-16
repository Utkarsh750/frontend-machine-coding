import React from "react";
import ReactSelect from "react-select";

const ReactSelectApp = () => {
  const options = [
    { values: "vanilla", lable: "Vanilla" },
    { values: "strawberry", lable: "Strawberry" },
    { values: "butter-scotch", lable: "Butter-Scotch" },
  ];
  return (
    <div>
      <h2>This is React Select App</h2>

      <ReactSelect options={options} />
    </div>
  );
};

export default ReactSelectApp;

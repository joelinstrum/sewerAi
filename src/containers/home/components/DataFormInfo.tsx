import React from "react";

const DataFormInfo = ({ data }) => {
  return (
    <div>
      <h4>Code {data.code}</h4>
      <div>
        {Object.keys(data.pipe_parameters).map((key) => {
          return (
            <div key={key}>
              <span>
                {key}: {data.pipe_parameters[key]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFormInfo;

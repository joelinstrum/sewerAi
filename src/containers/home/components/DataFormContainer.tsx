import React from "react";
import DataImage from "./DataImage";
import DataForm from "./DataForm";
import DataFormInfo from "./DataFormInfo";

interface IDataLabel {
  data: any;
  schema: any;
}

const DataLabel = ({ data: { frame_url }, data, schema }: IDataLabel) => {
  return (
    <div className="data-label-container">
      <div className="grid-left">
        <DataImage frame_url={frame_url} />
      </div>
      <div className="grid-right">
        <DataFormInfo data={data} />
        <DataForm data={data} schema={schema} />
      </div>
    </div>
  );
};

export default DataLabel;

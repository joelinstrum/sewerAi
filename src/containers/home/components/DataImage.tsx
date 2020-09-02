import React from "react";

interface IDataImage {
  frame_url?: string;
}

const DataImage = ({ frame_url }: IDataImage) => {
  return (
    <React.Fragment>
      {frame_url && (
        <img src={frame_url} alt="labeling" className="frame-image-container" />
      )}
    </React.Fragment>
  );
};

export default DataImage;

import React from "react";
import HeaderImage from "@assets/images/sewerai-logo-black.png";

export default () => {
  return (
    <div className="header-container">
      <img src={HeaderImage} className="header-logo" alt="SewerAI Logo" />
    </div>
  );
};

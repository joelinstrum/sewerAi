import React, { useState, useEffect } from "react";

const Submit = ({ isAbleToSubmit }) => {
  const [submitCss, setCss] = useState("submit-button-notready");

  useEffect(() => {
    if (isAbleToSubmit) {
      setCss("submit-button-ready");
    } else {
      setCss("submit-button-notready");
    }
  }, [isAbleToSubmit]);

  return (
    <button
      className={`submit-button ${submitCss}`}
      disabled={!isAbleToSubmit}
      type="submit"
    >
      Submit
    </button>
  );
};

export default Submit;

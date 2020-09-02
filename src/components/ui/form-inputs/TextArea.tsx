import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

interface updateFormFunc {
  (name: string, value: string | number): void;
}

interface ITextArea {
  isValid?: boolean;
  placeholder?: string;
  label?: string;
  min?: number;
  max?: number;
  type?: string;
  maxLength?: number;
  updateFormPayload: updateFormFunc;
}

const Element = styled.div`
  margin-bottom: 5px;
  margin-right: 5px;
`;

const TextArea = ({
  isValid = true,
  placeholder,
  label,
  max,
  updateFormPayload,
}: ITextArea) => {
  const [symbol, setSymbol] = useState(<span></span>);
  const [cssClass, setCssClass] = useState("");
  const [rows, setRows] = useState(1);
  const [cols] = useState(40);
  const [value, setValue] = useState("");

  const initRows = useCallback(() => {
    if (max) {
      setRows(Math.ceil(max / cols));
    }
  }, [max, cols]);

  useEffect(() => {
    initRows();
  }, [initRows]);

  useEffect(() => {
    if (isValid) {
      setCssClass("input-is-valid");
      setSymbol(<span>&#x2713;</span>);
    } else {
      setCssClass("input-not-valid");
      setSymbol(<span>&times;</span>);
    }
  }, [isValid]);

  const updateHandler = () => {
    updateFormPayload(placeholder, value);
  };

  return (
    <div>
      <div className="form-layout-2-columns">
        <Element>
          <textarea
            cols={40}
            rows={rows}
            placeholder={placeholder}
            maxLength={max}
            onChange={(e) => setValue(e.target.value)}
            onBlur={updateHandler}
          ></textarea>
        </Element>
        <Element>
          <span className={cssClass}>{symbol}</span>
          <span>{label}</span>
        </Element>
      </div>
    </div>
  );
};

export default TextArea;

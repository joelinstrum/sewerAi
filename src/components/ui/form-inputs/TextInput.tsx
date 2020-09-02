import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Element = styled.div`
  margin-bottom: 5px;
`;

interface validateFunc {
  (name: string, isValid: boolean): void;
}

interface updateFormFunc {
  (name: string, value: string | number): void;
}

interface ITextInput {
  label?: string;
  size?: number;
  isValid?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  type?: string;
  defaultValue?: string;
  maxLength?: number;
  validateHandler: validateFunc;
  updateFormPayload: updateFormFunc;
}

const TextInput = ({
  size = 20,
  placeholder,
  defaultValue,
  min,
  max,
  type,
  maxLength,
  validateHandler,
  updateFormPayload,
}: ITextInput) => {
  const [symbol, setSymbol] = useState(<span></span>);
  const [cssClass, setCssClass] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateRef = useRef(validateHandler);

  useEffect(() => {
    if (isValid) {
      setCssClass("input-is-valid");
      setSymbol(<span>&#x2713;</span>);
      validateRef.current(placeholder, true);
    } else {
      setCssClass("input-not-valid");
      setSymbol(<span>&times;</span>);
      validateRef.current(placeholder, false);
    }
  }, [isValid, placeholder, validateRef]);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
    checkIfValid();
  }, [defaultValue]);

  useEffect(() => {
    checkIfValid();
  }, [value]);

  const checkIfValid = () => {
    if (type === "number") {
      let numericValue: number = parseInt(value);
      if (/[^\d.]/gi.test(value)) {
        setIsValid(false);
        setError("No non-numeric values");
      } else if (isNaN(numericValue)) {
        setIsValid(false);
        setError("value should be numeric");
      } else if (min && numericValue < min) {
        setIsValid(false);
        setError(`Value should be at least ${min}`);
      } else if (max && numericValue > max) {
        setIsValid(false);
        setError(`Value should be no more than ${max}`);
      } else {
        setIsValid(true);
        setError("");
      }
    } else {
      setIsValid(true);
    }
  };

  //const checkIfValidRef

  const onChangeHandler = (e, name) => {
    setValue(e.target.value);
    updateFormPayload(name, e.target.value);
  };

  return (
    <div>
      <div className="form-layout-2-columns">
        <Element>
          <input
            type="text"
            size={size}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChangeHandler(e, placeholder)}
            maxLength={maxLength}
          />
        </Element>
        <Element className="input-container">
          <span className={cssClass}>{symbol}</span>
          <span>{error}</span>
        </Element>
      </div>
    </div>
  );
};

export default TextInput;

import React, { useReducer, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitButton, TextInput, TextArea } from "@components/ui";
import { postData } from "@redux/actions/app.actions";

const reducer = (state, action) => {
  switch (action.type) {
    case "updateValidation":
      return {
        ...state,
        validationItems: {
          ...state.validationItems,
          [action.item]: action.valid,
        },
      };

    case "updateFormValues":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

const initialState = { validationItems: {}, formValues: {} };

const DataForm = ({ data, schema }) => {
  function useHandleSubmit(e) {
    e.preventDefault();
    setDoSubmit(true);
  }

  const [{ validationItems, formValues }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [isAbleToSubmit, setEnableSubmit] = useState(false);
  const [doSubmit, setDoSubmit] = useState(false);

  const validateHandler = (name: string, valid: boolean) => {
    dispatch({ type: "updateValidation", item: name, valid });
  };

  const updateFormPayload = (name, value) => {
    dispatch({ type: "updateFormValues", name, value });
  };

  const initMaxLength = (max, type) => {
    if (type === "number" && max) {
      let maxLength: number = max ? max.toString().length + 2 : 0;
      if (maxLength && !isNaN(maxLength)) {
        return maxLength;
      }
    }
    return 0;
  };

  useEffect(() => {
    let allOk = true;
    Object.keys(validationItems).forEach((key) => {
      if (!validationItems[key]) {
        allOk = false;
      }
    });
    setEnableSubmit(allOk);
  }, [validationItems]);

  const dispatchForm = useDispatch();
  useEffect(() => {
    if (doSubmit) {
      dispatchForm(postData(formValues, data.id));
    }
  }, [doSubmit, dispatchForm, data, formValues]);

  return (
    <div>
      <form onSubmit={useHandleSubmit}>
        {schema &&
          schema.hasOwnProperty("fields") &&
          Object.keys(schema.fields).map((key) => {
            const item = schema.fields[key];
            const min = item.hasOwnProperty("minimum") ? item.minimum : 0;
            const max = item.hasOwnProperty("maximum")
              ? item.maximum
              : item.hasOwnProperty("max_length")
              ? item.max_length
              : null;
            const type = item.type;
            const maxLength: number = initMaxLength(max, type);
            if (type === "number") {
              return (
                <TextInput
                  placeholder={key}
                  key={key}
                  min={min}
                  max={max}
                  maxLength={maxLength}
                  type={type}
                  validateHandler={validateHandler}
                  updateFormPayload={updateFormPayload}
                />
              );
            } else if (maxLength && maxLength < 40) {
              return (
                <TextInput
                  placeholder={key}
                  key={key}
                  min={min}
                  max={max}
                  maxLength={maxLength}
                  type={type}
                  validateHandler={validateHandler}
                  updateFormPayload={updateFormPayload}
                />
              );
            } else {
              return (
                <TextArea
                  placeholder={key}
                  key={key}
                  min={min}
                  max={max}
                  type={type}
                  maxLength={maxLength}
                  updateFormPayload={updateFormPayload}
                />
              );
            }
          })}
        <div>
          <SubmitButton isAbleToSubmit={isAbleToSubmit} />
        </div>
        <div />
      </form>
    </div>
  );
};

export default DataForm;

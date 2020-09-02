import { useEffect, useState } from "react";

const useTextInput = (ref, { type, minimum, maximum }) => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const isRef = ref.hasOwnProperty("current");
    if (isRef) {
      ref.current.addEventListener("keyup", () => {
        const value = ref.current.value;
        console.log(checkType(value));
        setIsValid(checkType(value));
      });
    }
  }, [ref]);

  const checkType = (value) => {
    switch (type) {
      case "number":
        if (isNaN(value)) {
          return false;
        }
        const number = parseInt(value, 10);
        return number >= minimum && number <= maximum;

      default:
        return false;
    }
  };
  return isValid;
};

export default useTextInput;

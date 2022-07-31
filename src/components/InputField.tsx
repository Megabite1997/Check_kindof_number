import React, { FormEvent, FunctionComponent, useRef } from "react";

type PropsType = {
  onChange: (value: number) => void;
};

const InputField: FunctionComponent<PropsType> = ({ onChange }) => {
  let numberValueRef = useRef<any>(null);

  const convertToInteger = (param: any) => {
    const inputAnswer = eval(param);
    return Math.round(inputAnswer);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredNumberValue = numberValueRef.current?.value;
    const intValue = convertToInteger(enteredNumberValue);
    const positiveValue = intValue < 0 ? 1 : intValue;
    onChange(positiveValue);
    numberValueRef.current.value = positiveValue;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>Number Input</p>
        <input
          className="border border-current"
          type="text"
          placeholder="fill number"
          ref={numberValueRef}
        />
        <input
          className="border border-current mt-2 px-1 bg-sky-500 hover:bg-sky-800 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default InputField;

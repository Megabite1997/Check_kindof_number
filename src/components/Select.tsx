import React, { FunctionComponent } from "react";

type PropsType = {
  optionValue?: string;
  onChange: (value: string) => void;
};

const Select: FunctionComponent<PropsType> = ({ optionValue, onChange }) => {
  return (
    <div>
      <select
        className="border border-current"
        defaultValue={optionValue}
        onChange={(event) => onChange(event.currentTarget.value)}
      >
        <option value={optionValue} disabled>
          -- select an option --
        </option>
        <option value="prime">isPrime</option>
        <option value="fibanacci">isFibanacci</option>
      </select>
    </div>
  );
};

export default Select;

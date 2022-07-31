import React, { FunctionComponent, useState } from "react";
import Column from "../../components/Column";
import InputField from "../../components/InputField";
import Select from "../../components/Select";
import CheckValueType from "../../checkValueType";

const ColumnPage: FunctionComponent = () => {
  const [numberValue, setNumberValue] = useState<number>(NaN);
  const [selectOptionsCal, setSelectOptionsCal] = useState<string>(" ");

  return (
    <div className="flex h-screen w-full">
      <Column className="w-50 border border-indigo-600 ">
        <InputField onChange={(value) => setNumberValue(value)} />
      </Column>
      <Column className="min-w-25 grow border border-indigo-600">
        <Select
          optionValue={selectOptionsCal}
          onChange={(value) => setSelectOptionsCal(value)}
        />
      </Column>
      <Column className="w-75 border border-indigo-600">
        <CheckValueType
          selectOptionsCal={selectOptionsCal}
          numberValue={numberValue}
        />
      </Column>
    </div>
  );
};

export default ColumnPage;

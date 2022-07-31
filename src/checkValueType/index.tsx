import React, { FunctionComponent, useState } from "react";
import isFibonacci from "../lib/checkFibanacci";
import isPrime from "../lib/checkPrimeNumber";

type PropsType = {
  selectOptionsCal: string;
  numberValue: number;
};

const CheckValueType: FunctionComponent<PropsType> = ({
  selectOptionsCal,
  numberValue,
}) => {
  let answerString;

  if (selectOptionsCal === "prime") {
    const answer = isPrime(numberValue);
    answerString = answer.toString();
  }

  if (selectOptionsCal === "fibonacci") {
    const answer = isFibonacci(numberValue);
    answerString = answer.toString();
  }

  return <div>{answerString}</div>;
};

export default CheckValueType;

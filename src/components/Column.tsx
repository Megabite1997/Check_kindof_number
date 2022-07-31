import React, { FunctionComponent } from "react";

type PropsType = {
  className?: string;
  children?: React.ReactNode;
};

const Column: FunctionComponent<PropsType> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Column;

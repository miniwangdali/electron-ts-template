import React from "react";
import ReactDOM from "react-dom";

import "./app.scss";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello! from {props.compiler} and {props.framework}!
  </h1>
);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("Hyperion-Git--root")
);

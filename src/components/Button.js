import React from "react";
import { Div } from "./Div";

export const Button = ({ href, children, style = {} }) => {
  return (
    <Div>
      <a href={href} style={style} target="_blank">
        <span></span>
        <span
          style={{
            maxWidth: "100%",
            display: "inline-block",
            lineHeight: "120%",
          }}
        >
          {children}
        </span>
        <span></span>
      </a>
    </Div>
  );
};

import React from "react";

export const Headline = ({ children, style }) => {
  console.log(style);
  return (
    <div style={style}>
      Headline
      {children}
    </div>
  );
};

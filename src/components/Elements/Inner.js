import React from "react";

export const Inner = ({ children, style }) => {
  return (
    <div style={style}>
      Inner
      {children}
    </div>
  );
};

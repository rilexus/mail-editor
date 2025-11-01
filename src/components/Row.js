import React, { forwardRef } from "react";

export const Row = forwardRef(({ children, style, ...props }, ref) => {
  return (
    <table
      align="center"
      width="100%"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      {...props}
      ref={ref}
      style={style}
    >
      <tbody style={{ width: "100%" }}>
        <tr style={{ width: "100%" }}>{children}</tr>
      </tbody>
    </table>
  );
});

Row.displayName = "Row";

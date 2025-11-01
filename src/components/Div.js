import React from "react";

export const Div = ({ children }) => {
  return (
    <table
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
      }}
      role="presentation"
      cellSpacing="0"
      cellPadding="0"
      border="0"
    >
      <tbody>
        <tr style={{ width: "100%" }}>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

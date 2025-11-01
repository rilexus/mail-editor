import React from "react";

export const Text = ({ children, style = {} }) => {
  /*
  * color: 'rgb(129,140,248)',
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 600,
  * */
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
        <tr>
          <td>
            <p style={style}>{children}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

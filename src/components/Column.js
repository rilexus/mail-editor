import { forwardRef } from "react";

export const Column = forwardRef(({ children, style, ...props }, ref) => {
  return (
    <td {...props} ref={ref} style={style}>
      {children}
    </td>
  );
});

Column.displayName = "Column";

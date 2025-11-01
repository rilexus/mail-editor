export const Main = ({ children, style }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        minHeight: "500px",
        ...style,
      }}
    >
      main
      {children}
    </div>
  );
};

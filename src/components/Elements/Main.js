export const Main = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        minHeight: "500px",
      }}
    >
      main
      {children}
    </div>
  );
};

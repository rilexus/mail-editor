export const Main = ({ children, data, parent, path, onDrop, ...rest }) => {
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

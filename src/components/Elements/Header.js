export const Header = ({ children, style }) => {
  return (
    <div
      style={{
        minHeight: "100px",
        border: "1px solid black",
        ...style,
      }}
    >
      header
      {children}
    </div>
  );
};

import { Element } from "./Element";

export const Header = ({ children, onClick, elements }) => {
  return (
    <div>
      header
      {children}
      {elements &&
        Object.entries(elements).map(([type, element]) => {
          return <Element type={type} element={element} />;
        })}
      {children}
    </div>
  );
};

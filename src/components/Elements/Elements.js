import React from "react";
import { Element } from "./Element";
import { DropArea } from "../DropArea";

const getElementAccept = (type) => {
  switch (type) {
    case "header":
      return [];
    case "footer":
      return [];
    case "main":
      return ["inner", "content", "toc"];
    default:
      return ["header", "footer", "main"];
  }
};

export const Elements = ({
  path = "",
  elements,
  accept = [],
  onDrop,
  onClick,
}) => {
  const p = path ? `${path}.` : "";
  return (
    <>
      <DropArea
        accept={accept}
        onDrop={(item) =>
          onDrop(`${p}elements.${item.type}`, { ...item, path })
        }
      />
      {elements &&
        Object.entries(elements).map(([type, data]) => {
          const elementAccept = getElementAccept(type);
          const path = `${p}elements.`;
          return (
            <div key={type}>
              <Element
                id={type}
                type={type}
                onClick={onClick}
                onDrop={(item) => {
                  onDrop(`${path}${item.type}`, item);
                }}
                accept={elementAccept}
                {...data}
              />
              <DropArea
                accept={accept}
                onDrop={(item) => {
                  onDrop(`${path}${item.type}`, item);
                }}
              />
            </div>
          );
        })}
    </>
  );
};

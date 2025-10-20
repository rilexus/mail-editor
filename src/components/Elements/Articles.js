import React from "react";
import { Element } from "./Element";

export const Articles = ({ elements }) => {
  return Object.entries(elements).map(([type, data]) => {
    return <Element key={type} id={type} type={type} {...data} />;
  });
};

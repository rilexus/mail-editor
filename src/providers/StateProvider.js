import React, { createContext, useContext, useState } from "react";
import defaultConfig from "../default.js";
import { capitalize } from "../utils/capitalize";
import { getAcceptArray } from "./getAcceptArray";
import { getAttributes } from "./getAttributes";

const mailer2TemplateToCanvasLayout = (template) => {
  const run = (node) => {
    const { elements, articleElements } = node;

    return {
      attributes: getAttributes(node),
      children: !!elements
        ? Object.entries(elements).reduce((acc, [key, value]) => {
            return [
              ...acc,
              {
                name: key,
                id: "",
                path: "",
                label: capitalize(key),
                accept: getAcceptArray({ name: key }),
                ...run(value),
              },
            ];
          }, [])
        : !!articleElements
        ? Object.entries(articleElements).reduce((acc, [key, value]) => {
            return [
              ...acc,
              {
                name: key,
                id: "",
                path: "",
                label: capitalize(key),
                accept: getAcceptArray({ name: key }),
                ...run(value),
              },
            ];
          }, [])
        : [],
    };
  };

  return run(template);
};

console.log(
  mailer2TemplateToCanvasLayout(
    defaultConfig.system.mailer2.templates.mediaReviewA
  )
);

const initialState = {
  selectedComponent: null,
  selectedComponentPath: null,
  layout: {
    name: "root",
    type: "layout",
    attributes: {},
    props: {},
    ...mailer2TemplateToCanvasLayout(
      defaultConfig.system.mailer2.templates.mediaReviewA
    ),
  },
};

const Context = createContext([initialState, {}]);

export const useApplicationState = (selector) => {
  const state = useContext(Context);
  return selector ? selector(state) : state;
};

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const run = (command) => {
    command.execute(state, setState);
  };

  const undo = () => {};
  const redo = () => {};

  return (
    <Context.Provider value={{ ...state, run, redo, undo }}>
      {children}
    </Context.Provider>
  );
};

export const withApplicationState = (Component) => {
  return () => (
    <StateProvider>
      <Component />
    </StateProvider>
  );
};

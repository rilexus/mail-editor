import React, { createContext, useContext, useState } from "react";
import { get } from "../utils/get";
import { log } from "../services/log";

const initialLayout = {
  name: "root",
  type: "layout",
  attributes: {},
  props: {},
  children: [
    // {
    //   name: 'header',
    //   type: "Component",
    //   children: [],
    //   props: {},
    //   attributes: {}
    // },
    // {
    //   name: "main",
    //   type: "Component",
    //   attributes: {},
    //   props: {},
    //   children: [
    //     {
    //       type: "Component",
    //       name: "toc",
    //       attributes: {},
    //       props: {},
    //       children: [],
    //     },
    //     {
    //       type: "Component",
    //       name: "content",
    //       attributes: {},
    //       props: {},
    //       children: [
    //         {
    //           type: "Component",
    //           name: "inner",
    //           attributes: {},
    //           props: {},
    //           children: [
    //             {
    //               name: "headline",
    //               type: "Component",
    //               props: {
    //                 template: "recordField",
    //                 value: "subject_area_name",
    //               },
    //               attributes: {},
    //               children: [],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "footer",
    //   type: "Component",
    //   props: {},
    //   children: [],
    //   attributes: {},
    // },
  ],
  // header: {},
  // main: {
  //   elements: {
  //     toc: {},
  //     content: {
  //       elements: {
  //         inner: {
  //           elements: {
  //             headline: {
  //               template: "recordField",
  //               value: "subject_area_name",
  //             },
  //           },
  //           articles: {},
  //         },
  //       },
  //     },
  //   },
  // },
  // footer: {},
};

const initialState = {
  selectedComponent: null,
  selectedComponentPath: null,
  layout: initialLayout,
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

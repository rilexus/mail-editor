import { useState } from "react";

const create = (init) => {
  let state = null;

  return function useStoreHook(selector) {
    const [, setState] = useState(false);

    const set = (func) => {
      func(state);
      setState((s) => !s);
    };

    if (state === null) {
      state = init(set);
    }

    return selector(state);
  };
};

export const useEditorStore = create((set) => {
  return {
    value: 1,

    history: {
      future: [],
      past: [],
    },

    run: (command) => {
      set((state) => {
        command.execute(state);
        state.history.past.push(command);
        state.history.future = [];
      });
    },
    undo: () => {
      set((state) => {
        const command = state.history.past.pop();
        if (!command) return;
        command.undo(state);
        state.history.future.push(command);
      });
    },
    redo: () => {
      set((p) => {
        const command = p.history.future.pop();
        if (!command) return;
        command.execute(p);
        p.history.past.push(command);
      });
    },
  };
});

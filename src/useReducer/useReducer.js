import { useCallback, useReducer as nativeReducer } from "react";

const ALLOWED_STATES = 10;

const undoReducer = (state) => {
  if (state.past.length > 0) {
    const newFuture = [...state.future, state.current];

    let newPast = [...state.past];
    const newState = newPast.pop();
    return {
      ...state,
      past: newPast,
      current: newState,
      future: newFuture,
    };
  }
  return state;
};

const redoReducer = (state) => {
  if (state.future.length > 0) {
    const newPast = [...state.past, state.current];

    const newFuture = [...state.future];
    const newState = newFuture.pop();

    return {
      ...state,
      past: newPast,
      current: newState,
      future: newFuture,
    };
  }
  return state;
};

const resetReducer = (state) => {
  return {
    ...state,
    past: [],
    current: state.initial,
    future: [],
  };
};

const undoRedoEnhancer = (reducer) => {
  return (state, action) => {
    if (action.type === "reset") {
      return resetReducer(state, action);
    }

    if (action.type === "redo") {
      return redoReducer(state, action);
    }
    if (action.type === "undo") {
      return undoReducer(state, action);
    }

    const newState = reducer(state.current, action);

    let newPast = [];
    if (state.past.length <= ALLOWED_STATES) {
      newPast = [...state.past, state.current];
    } else {
      const [, /*remove first: the oldest element*/ ...rest] = state.past;
      newPast = [...rest, state.current];
    }
    return {
      ...state,
      past: newPast,
      current: newState,
      future: [],
    };
  };
};

const useReducer = (reducer, initState, initializer) => {
  const [state, dispatch] = nativeReducer(
    undoRedoEnhancer(reducer),
    initState,
    (state) => {
      const init =
        typeof initializer === "function" ? initializer(state) : state;
      return {
        past: [],
        initial: init,
        current: init,
        future: [],
      };
    }
  );

  const _dispatch = useCallback(
    (action) => {
      dispatch(action);
    },
    [dispatch]
  );

  const undo = useCallback(() => {
    dispatch({ type: "undo" });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  const redo = useCallback(() => {
    dispatch({ type: "redo" });
  }, [dispatch]);

  return [
    state.current,
    _dispatch,
    {
      undo,
      redo,
      reset,
      canUndo: state.past.length > 0,
      canRedo: state.future.length > 0,
    },
  ];
};

export default useReducer;

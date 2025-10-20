import { act, renderHook } from "@testing-library/react";
import useReducer from "./useReducer";

describe("useReducer", () => {
  it("should ", function () {
    const hookValue = renderHook(() =>
      useReducer(
        (state, action) => {
          if (action.type === "increment") {
            return state + 1;
          }
          return state;
        },
        -1,
        (s) => s + 1
      )
    );

    const increment = () => {
      act(() => {
        hookValue.result.current[1]({ type: "increment" });
      });
    };

    const undo = () => {
      act(() => {
        hookValue.result.current[2].undo();
      });
    };

    const redo = () => {
      act(() => {
        hookValue.result.current[2].redo();
      });
    };

    const reset = () => {
      act(() => {
        hookValue.result.current[2].reset();
      });
    };

    expect(hookValue.result.current[0]).toBe(0);

    increment();
    expect(hookValue.result.current[0]).toBe(1);

    undo();
    expect(hookValue.result.current[0]).toBe(0);

    redo();
    expect(hookValue.result.current[0]).toBe(1);

    reset();
    expect(hookValue.result.current[0]).toBe(0);

    for (let i = 1; i < 12; i++) {
      increment();
      expect(hookValue.result.current[0]).toBe(i);
    }

    for (let i = 1; i < 12; i++) {
      // the hook can only undo 10 states
      // every older state will be removed and cant be revisited
      undo();
      expect(hookValue.result.current[0]).toBe(11 - i);
    }

    expect(hookValue.result.current[0]).toBe(0);
    undo();
    expect(hookValue.result.current[0]).toBe(0);
    undo();
    expect(hookValue.result.current[0]).toBe(0);
  });
});

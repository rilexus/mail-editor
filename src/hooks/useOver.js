import { useEffect, useState } from "react";

/**
 * Indicates if the mouse is over a specific element.
 * @param ref
 * @return {boolean}
 */
export const useOver = (ref) => {
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    if (!ref.current) return;

    const onMouseOver = (event) => {
      event.stopPropagation();
      setIsOver(true);
    };

    const onMouseOut = (event) => {
      event.stopPropagation();
      setIsOver(false);
    };

    ref.current.addEventListener("mouseover", onMouseOver);
    ref.current.addEventListener("mouseout", onMouseOut);

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("mouseover", onMouseOver);
      ref.current.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return isOver;
};

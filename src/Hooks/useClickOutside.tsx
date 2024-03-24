import { MutableRefObject, useEffect } from "react";

interface UseClickOutsideConfig {
  ref: MutableRefObject<Element | null>;
  onOutsideClick?: (event: MouseEvent) => void;
}

export const useClickOutside = ({
  ref,
  onOutsideClick = () => {},
}: UseClickOutsideConfig) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event && ref) {
        const clickedOutside =
          ref.current && !ref.current.contains((event.target as Node) || null);
        if (clickedOutside) {
          onOutsideClick(event);
        }
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside as (event: MouseEvent) => void
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as (event: MouseEvent) => void
      );
    };
  }, [ref, onOutsideClick]);
};

import React from "react";

const useHandleOutsideClick = (ref: any, state: any, stateFunc: () => void) => {
  const detectOutside = React.useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        stateFunc();
      }
    },
    [ref, stateFunc]
  );

  React.useEffect(() => {
    if (state) {
      document.addEventListener("mousedown", detectOutside);
    }
    return () => {
      document.removeEventListener("mousedown", detectOutside);
    };
  }, [ref, detectOutside, state]);
};

export default useHandleOutsideClick;

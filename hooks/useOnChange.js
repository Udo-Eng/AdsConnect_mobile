import { useEffect } from "react";

function useOnChange(num, inputRef) {
  return useEffect(() => {
    function focusOnInput() {
      if (num.length === 1) {
        inputRef.current.focus();
      }
    }
    focusOnInput();
  }, [num]);
}

export default useOnChange;

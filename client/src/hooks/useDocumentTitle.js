import { useEffect, useRef } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef("Glo Raise");

  useEffect(() => {
    document.title = "Glo Raise - " + title;
  }, [title]);

  useEffect(() => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, []);
}

export default useDocumentTitle;

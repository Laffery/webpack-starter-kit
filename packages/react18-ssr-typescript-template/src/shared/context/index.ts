import { createContext, useContext } from "react";

export const Context = createContext<SSRData>({
  props: {},
  location: "/",
});

export const getInitialContextValue = () => {
  if (window && window.SSR_DATA) return window.SSR_DATA;
  return { props: {}, location: "/" };
};

export { useContext };

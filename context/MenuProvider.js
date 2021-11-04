import { createContext, useContext } from "react";

const MenuContext = createContext();

export default function MenuProvider(props) {
  const { value, children } = props;
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenuContext() {
  return useContext(MenuContext);
}

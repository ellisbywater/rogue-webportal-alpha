import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

const MenuContext = createContext();

export default function MenuProvider(props) {
  const [activeLink, setActiveLink] = useState("");
  const { value, children } = props;
  const router = useRouter();
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenuContext() {
  return useContext(MenuContext);
}

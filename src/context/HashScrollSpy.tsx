"use client";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";

const HashScrollContext = createContext({});

export const useHashScroll = () => useContext(HashScrollContext);

export const HashScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.split("#")[1];
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        offset: -60,
        smooth: "easeInOutQuart",
      });
    }
  }, [pathname, searchParams]);

  return (
    <HashScrollContext.Provider value={{}}>
      {children}
    </HashScrollContext.Provider>
  );
};

export default HashScrollProvider;

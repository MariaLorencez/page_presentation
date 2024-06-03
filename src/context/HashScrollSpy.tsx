"use client";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  Suspense,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";

const HashScrollContext = createContext({});

export const useHashScroll = () => useContext(HashScrollContext);

const HashScrollProviderContent: FC = () => {
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

  return null;
};

export const HashScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HashScrollContext.Provider value={{}}>
      <Suspense fallback={<div>Cargando...</div>}>
        <HashScrollProviderContent />
      </Suspense>
      {children}
    </HashScrollContext.Provider>
  );
};

export default HashScrollProvider;

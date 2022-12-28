import { useEffect } from "react";
import { useLocation } from "react-router";

type AppProps = {
  children: JSX.Element;
};

const ScrollToTop = ({children}: AppProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>
};

export default ScrollToTop;
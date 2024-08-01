import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScrollTop = () => {
  const { pathname } = useLocation();

  console.log("test");

  useEffect(() => {
    console.log(`Pathname changed to: ${pathname}`);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RouteScrollTop;

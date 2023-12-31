import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop: React.FC = () => {
  const routePath = useLocation();
  const resetScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    resetScroll();
  }, [routePath]);

  return null;
};

export default GoToTop;

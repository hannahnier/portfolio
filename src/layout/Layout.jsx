import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

const Layout = () => {
  // scroll button for all pages:
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButton = () => {
      window.pageYOffset > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };
    window.addEventListener("scroll", handleScrollButton);

    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);

  return (
    <div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{ position: "fixed", right: 0, bottom: 0, zIndex: 5 }}
        >
          Back to top
        </button>
      )}
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import styles from "../styles/layout.module.css";
import arrowUp from "../assets/icons/arrowUp.svg";

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
        <button className={styles.scrollButton} onClick={scrollToTop}>
          <img src={arrowUp} alt="icon for scrolling to top of page" />
        </button>
      )}
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

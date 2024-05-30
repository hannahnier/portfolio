import style from "../styles/layout.module.css";
import { useNavContext } from "../utils/Context";

const Navigation = () => {
  const { activeNav, setActiveNav } = useNavContext();

  return (
    <nav>
      <ul>
        <li>
          {" "}
          <a
            href="#start"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? style.active : ""}
          >
            Start
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#work"
            onClick={() => setActiveNav("#work")}
            className={activeNav === "#work" ? style.active : ""}
          >
            Work
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? style.active : ""}
          >
            About
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? style.active : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

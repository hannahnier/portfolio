import style from "../styles/layout.module.css";
import { useLangContext } from "../utils/LangProvider";
import { useNavContext } from "../utils/NavProvider";
import { navbar } from "../utils/dictionary";

const Navigation = () => {
  const { activeNav, setActiveNav } = useNavContext();
  const { language } = useLangContext();

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
            {navbar[language].start}
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#work"
            onClick={() => setActiveNav("#work")}
            className={activeNav === "#work" ? style.active : ""}
          >
            {navbar[language].work}
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? style.active : ""}
          >
            {navbar[language].about}
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? style.active : ""}
          >
            {navbar[language].contact}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

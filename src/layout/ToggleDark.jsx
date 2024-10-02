import style from "../styles/layout.module.css";
import { useNavContext } from "../utils/NavProvider";
import moon from "../assets/icons/toggle-moon.svg";
import sun from "../assets/icons/toggle-sun.svg";

const ToggleDark = () => {
  const { darkmode, setDarkmode } = useNavContext();

  const toggleDarkmode = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <div
      className={
        darkmode
          ? `${style.toggleBox} ${style.toggleBoxActive}`
          : `${style.toggleBox}`
      }
      onClick={toggleDarkmode}
    >
      <img src={darkmode ? moon : sun} className={style.toggleInner} />
    </div>
  );
};

export default ToggleDark;

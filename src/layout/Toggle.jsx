import style from "../styles/layout.module.css";
import { useNavContext } from "../utils/Context";

const Toggle = () => {
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
      <div className={style.toggleInner}></div>
    </div>
  );
};

export default Toggle;

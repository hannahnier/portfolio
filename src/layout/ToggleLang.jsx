import style from "../styles/layout.module.css";
import { useLangContext } from "../utils/LangProvider";

const ToggleLang = () => {
  const { language, setLanguage } = useLangContext();

  const selectLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className={style.selectOuter}>
      <select
        className={style.selectInner}
        name="lang"
        id="lang"
        value={language}
        onChange={selectLanguage}
      >
        <option value="german">🇩🇪</option>
        <option value="english">🇬🇧</option>
      </select>
    </div>
  );
};

export default ToggleLang;

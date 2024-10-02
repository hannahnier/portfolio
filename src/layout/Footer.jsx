import { useLangContext } from "../utils/LangProvider";
import { footer } from "../utils/dictionary";

const Footer = () => {
  const { language } = useLangContext();
  return (
    <footer>
      {" "}
      <div>
        <p>&copy; {footer[language]}</p>
      </div>
    </footer>
  );
};

export default Footer;

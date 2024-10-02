import Navigation from "./Navigation";
import ToggleDark from "./ToggleDark";
import ToggleLang from "./ToggleLang";

const Header = () => {
  return (
    <header>
      <Navigation />
      <ToggleDark />
      <ToggleLang />
    </header>
  );
};

export default Header;

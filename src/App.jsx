import "./App.css";
import { useNavContext } from "./utils/Context";
import Router from "./utils/Router";

function App() {
  const { darkmode } = useNavContext();
  document.body.setAttribute("data-theme", darkmode ? "dark" : "light");
  return <Router data-theme={darkmode ? "dark" : "light"} />;
}

export default App;

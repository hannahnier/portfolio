import { Outlet } from "react-router-dom";
import Header from "./Header";
import Context from "../utils/Context";

const Layout = () => {
  return (
    <Context>
      <Header />
      <Outlet />
    </Context>
  );
};

export default Layout;

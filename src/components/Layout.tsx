import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar title="Where in the world?" />
      <Outlet />
    </div>
  );
}

export default Layout;

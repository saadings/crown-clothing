import NavigationBar from "../../../components/navigation-bar/NavigationBar";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Navigation;

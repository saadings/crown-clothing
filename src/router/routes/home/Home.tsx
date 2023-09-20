import CategoriesMenu from "../../../components/categories-menu/CategoriesMenu";
// import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <CategoriesMenu />
      {/* // ! where ever the outlet is written,
      // ! only there the child component renders */}
      {/* <Outlet /> */}
    </>
  );
};

export default Home;

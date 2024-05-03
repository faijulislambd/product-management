import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const HomeLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default HomeLayout;

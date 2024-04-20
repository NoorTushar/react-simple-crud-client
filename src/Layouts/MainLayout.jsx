import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";

const MainLayout = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayout;

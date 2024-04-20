import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <div className="bg-gray-200 text-black text-center">
         <ul className="space-x-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/users"}>Users</Link>
         </ul>
      </div>
   );
};

export default NavBar;

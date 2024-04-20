import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Users from "../components/Users/Users";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/users",
            element: <Users></Users>,
            loader: () => {
               return fetch("http://localhost:3000/users");
            },
         },
      ],
   },
]);

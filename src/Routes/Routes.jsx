import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Users from "../components/Users/Users";
import Update from "../components/Update/Update";

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
         {
            path: "/users/:id",
            element: <Update></Update>,
            loader: ({ params }) => {
               return fetch(`http://localhost:3000/users/${params.id}`);
            },
         },
      ],
   },
]);

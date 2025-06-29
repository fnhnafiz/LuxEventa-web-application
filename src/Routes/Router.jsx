import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
]);
export default Router;

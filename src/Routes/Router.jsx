import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import AddEvents from "../Pages/AddEvents";
import MyEvent from "../Pages/MyEvent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/add-event",
        element: <AddEvents />,
      },
      {
        path: "/my-event",
        element: <MyEvent />,
      },
    ],
  },
]);
export default Router;

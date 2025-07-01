import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import AddEvents from "../Pages/AddEvents";
import MyEvent from "../Pages/MyEvent";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "../Secure/PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <AddEvents />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-event",
        element: (
          <PrivateRoutes>
            <MyEvent />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default Router;

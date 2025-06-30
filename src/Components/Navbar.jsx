import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

const Navbar = () => {
  const user = null;
  // const { user, logOut } = useContext(AuthContext);
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(pathname);
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColur] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColur(true);
    } else {
      setColur(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  return (
    <div
      className={`w-full z-50 fixed top-0 ${
        color || pathname !== "/"
          ? "bg-orange-600 shadow text-white"
          : " text-white"
      } transition duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <IoMenu
            onClick={() => setMenuBar(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <span className="text-black">Lux</span>Eventa
            </h1>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden lg:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold hover:text-red-500 transition ${
                  isActive ? "text-black" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `font-semibold hover:text-red-500 transition ${
                  isActive ? "text-black" : ""
                }`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-event"
              className={({ isActive }) =>
                `font-semibold hover:text-red-500 transition ${
                  isActive ? "text-black" : ""
                }`
              }
            >
              Add Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-event"
              className={({ isActive }) =>
                `font-semibold hover:text-red-500 transition ${
                  isActive ? "text-black" : ""
                }`
              }
            >
              My Event
            </NavLink>
          </li>
        </ul>

        {/* Right: Auth/User */}
        <div className="hidden lg:flex items-center gap-4">
          {user?.email ? (
            <>
              <img
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt="profile"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
          menuBar && "translate-x-0"
        )}
      >
        <section className="bg-white text-black flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-56">
          <IoClose
            onClick={() => setMenuBar(false)}
            className="text-4xl cursor-pointer"
          />
          <ul className="flex flex-col gap-4">
            <NavLink to="/" onClick={() => setMenuBar(false)}>
              Home
            </NavLink>
            <NavLink to="/events" onClick={() => setMenuBar(false)}>
              Events
            </NavLink>
            <NavLink to="/add-event" onClick={() => setMenuBar(false)}>
              Add Event
            </NavLink>
            <NavLink to="/my-event" onClick={() => setMenuBar(false)}>
              My Event
            </NavLink>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            {user?.email ? (
              <>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="profile"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;

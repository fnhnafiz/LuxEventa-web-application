import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useAxiosPublic from "../Hooks/axiosPublic";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColor] = useState(false);

  const axiosPublic = useAxiosPublic();
  const userEmail = JSON.parse(localStorage.getItem("user"));
  // console.log(userEmail);

  const { data: user = {} } = useQuery({
    queryKey: ["user", userEmail],
    enabled: !!userEmail,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${userEmail.email}`);
      return res.data.user;
    },
  });
  // console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear saved user
    navigate("/login"); // Redirect to login
  };

  const handleScroll = () => {
    setColor(window.scrollY >= 90);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`w-full z-50 fixed top-0 ${
        color || pathname !== "/"
          ? "bg-white shadow text-black "
          : "text-orange-500"
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
              <span className="text-orange-500">Lux</span>Eventa
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
        {/* Right: Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {!userEmail ? (
            <Link to="/login">
              <Button className="bg-red-500 text-white">Sign In</Button>
            </Link>
          ) : (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <img
                  src={user?.photo}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <div className="px-4 py-2 text-sm font-medium text-black">
                  {user?.name}
                </div>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 px-4 py-2"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <div className="flex flex-col gap-4 mt-4">
            {!userEmail ? (
              <Link to="/login">
                <Button className="bg-red-500 text-white">Sign In</Button>
              </Link>
            ) : (
              <>
                <img
                  src={user?.photo}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;

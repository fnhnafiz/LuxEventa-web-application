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
import toast from "react-hot-toast";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColor] = useState(false);

  const axiosPublic = useAxiosPublic();
  const userEmail = JSON.parse(localStorage.getItem("user"));

  const { data: user = {} } = useQuery({
    queryKey: ["user", userEmail],
    enabled: !!userEmail,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${userEmail.email}`);
      return res.data.user;
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.error("Logout");
  };

  const handleScroll = () => {
    setColor(window.scrollY >= 90);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`w-full z-50 fixed top-0 ${
        color || pathname !== "/"
          ? "bg-gradient-to-r from-red-500 to-orange-500 shadow-lg text-white"
          : " backdrop-blur-sm text-white"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <IoMenu
            onClick={() => setMenuBar(true)}
            className="text-3xl cursor-pointer lg:hidden hover:text-yellow-200 transition-colors"
          />
          <Link to="/">
            <h1 className="text-2xl font-bold hover:text-yellow-200 transition-colors">
              <span className="text-yellow-200">Lux</span>Eventa
            </h1>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden lg:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold hover:text-yellow-200 transition-colors ${
                  isActive
                    ? "text-yellow-200 border-b-2 border-yellow-200 pb-1"
                    : ""
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
                `font-semibold hover:text-yellow-200 transition-colors ${
                  isActive
                    ? "text-yellow-200 border-b-2 border-yellow-200 pb-1"
                    : ""
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
                `font-semibold hover:text-yellow-200 transition-colors ${
                  isActive
                    ? "text-yellow-200 border-b-2 border-yellow-200 pb-1"
                    : ""
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
                `font-semibold hover:text-yellow-200 transition-colors ${
                  isActive
                    ? "text-yellow-200 border-b-2 border-yellow-200 pb-1"
                    : ""
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
              <Button className="bg-white text-red-500 hover:bg-yellow-200 hover:text-red-600 font-semibold transition-colors shadow-md">
                Sign In
              </Button>
            </Link>
          ) : (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <img
                  src={user?.photo}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-white hover:ring-yellow-200 transition-all shadow-md"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white shadow-lg border-0"
              >
                <div className="px-4 py-2 text-sm font-medium text-gray-800 border-b border-gray-200">
                  {user?.name}
                </div>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-50 px-4 py-2 font-medium"
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
        <section className="bg-gradient-to-b from-red-500 to-orange-500 text-white flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-56 shadow-xl">
          <IoClose
            onClick={() => setMenuBar(false)}
            className="text-4xl cursor-pointer hover:text-yellow-200 transition-colors"
          />
          <ul className="flex flex-col gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold hover:text-yellow-200 transition-colors text-lg ${
                    isActive
                      ? "text-yellow-200 border-l-4 border-yellow-200 pl-2"
                      : ""
                  }`
                }
                onClick={() => setMenuBar(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `font-semibold hover:text-yellow-200 transition-colors text-lg ${
                    isActive
                      ? "text-yellow-200 border-l-4 border-yellow-200 pl-2"
                      : ""
                  }`
                }
                onClick={() => setMenuBar(false)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-event"
                className={({ isActive }) =>
                  `font-semibold hover:text-yellow-200 transition-colors text-lg ${
                    isActive
                      ? "text-yellow-200 border-l-4 border-yellow-200 pl-2"
                      : ""
                  }`
                }
                onClick={() => setMenuBar(false)}
              >
                Add Event
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-event"
                className={({ isActive }) =>
                  `font-semibold hover:text-yellow-200 transition-colors text-lg ${
                    isActive
                      ? "text-yellow-200 border-l-4 border-yellow-200 pl-2"
                      : ""
                  }`
                }
                onClick={() => setMenuBar(false)}
              >
                My Event
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            {!userEmail ? (
              <Link to="/login">
                <Button className="bg-white text-red-500 hover:bg-yellow-200 hover:text-red-600 font-semibold transition-colors w-full">
                  Sign In
                </Button>
              </Link>
            ) : (
              <>
                <img
                  src={user?.photo}
                  alt="profile"
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
                />
                <div className="text-sm font-medium text-yellow-200">
                  {user?.name}
                </div>
                <Button
                  variant="destructive"
                  onClick={handleLogout}
                  className="bg-white text-red-500 hover:bg-yellow-200 hover:text-red-600 font-semibold transition-colors"
                >
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

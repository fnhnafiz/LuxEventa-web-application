import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const { pathname } = useLocation();
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColor] = useState(false);

  // Mock user (replace with real context logic)
  const user = {
    email: "example@email.com",
    photoURL: "https://i.pravatar.cc/100",
    displayName: "Nafiz Hossain",
  };

  const handleScroll = () => {
    setColor(window.scrollY >= 90);
  };

  window.addEventListener("scroll", handleScroll);

  const handleLogout = () => {
    console.log("Logging out...");
  };
  return (
    // <div
    //   className={`w-full z-50 fixed top-0 ${
    //     color || pathname !== "/"
    //       ? "bg-orange-600 shadow text-white"
    //       : " text-white"
    //   } transition duration-300`}
    // >
    //   <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
    //     {/* Left: Logo */}
    //     <div className="flex items-center gap-2">
    //       <IoMenu
    //         onClick={() => setMenuBar(true)}
    //         className="text-3xl cursor-pointer lg:hidden"
    //       />
    //       <Link to="/">
    //         <h1 className="text-2xl font-bold">
    //           <span className="text-black">Lux</span>Eventa
    //         </h1>
    //       </Link>
    //     </div>

    //     {/* Center: Nav Links */}
    //     <ul className="hidden lg:flex gap-8 absolute left-1/2 -translate-x-1/2">
    //       <li>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             `font-semibold hover:text-red-500 transition ${
    //               isActive ? "text-black" : ""
    //             }`
    //           }
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/events"
    //           className={({ isActive }) =>
    //             `font-semibold hover:text-red-500 transition ${
    //               isActive ? "text-black" : ""
    //             }`
    //           }
    //         >
    //           Events
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/add-event"
    //           className={({ isActive }) =>
    //             `font-semibold hover:text-red-500 transition ${
    //               isActive ? "text-black" : ""
    //             }`
    //           }
    //         >
    //           Add Event
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/my-event"
    //           className={({ isActive }) =>
    //             `font-semibold hover:text-red-500 transition ${
    //               isActive ? "text-black" : ""
    //             }`
    //           }
    //         >
    //           My Event
    //         </NavLink>
    //       </li>
    //     </ul>

    //     {/* Right: Auth/User */}
    //     <div className="hidden lg:flex items-center gap-4">
    //       {user?.email ? (
    //         <>
    //           <img
    //             referrerPolicy="no-referrer"
    //             className="w-10 h-10 rounded-full"
    //             src={user?.photoURL}
    //             alt="profile"
    //           />
    //           <button className="bg-red-500 text-white px-4 py-2 rounded">
    //             Log out
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link to="/login">
    //             <button className="bg-red-500 text-white px-4 py-2 rounded">
    //               Login
    //             </button>
    //           </Link>
    //           <Link to="/register">
    //             <button className="bg-green-500 text-white px-4 py-2 rounded">
    //               Register
    //             </button>
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>

    //   {/* Sidebar (Mobile) */}
    //   <div
    //     className={clsx(
    //       "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
    //       menuBar && "translate-x-0"
    //     )}
    //   >
    //     <section className="bg-white text-black flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-56">
    //       <IoClose
    //         onClick={() => setMenuBar(false)}
    //         className="text-4xl cursor-pointer"
    //       />
    //       <ul className="flex flex-col gap-4">
    //         <NavLink to="/" onClick={() => setMenuBar(false)}>
    //           Home
    //         </NavLink>
    //         <NavLink to="/events" onClick={() => setMenuBar(false)}>
    //           Events
    //         </NavLink>
    //         <NavLink to="/add-event" onClick={() => setMenuBar(false)}>
    //           Add Event
    //         </NavLink>
    //         <NavLink to="/my-event" onClick={() => setMenuBar(false)}>
    //           My Event
    //         </NavLink>
    //       </ul>
    //       <div className="flex flex-col gap-4 mt-4">
    //         {user?.email ? (
    //           <>
    //             <img
    //               className="w-10 h-10 rounded-full"
    //               src={user?.photoURL}
    //               alt="profile"
    //             />
    //             <button className="bg-red-500 text-white px-4 py-2 rounded">
    //               Log out
    //             </button>
    //           </>
    //         ) : (
    //           <>
    //             <Link to="/login">
    //               <button className="bg-red-500 text-white px-4 py-2 rounded">
    //                 Login
    //               </button>
    //             </Link>
    //             <Link to="/register">
    //               <button className="bg-green-500 text-white px-4 py-2 rounded">
    //                 Register
    //               </button>
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <div
      className={`w-full z-50 fixed top-0 ${
        color || pathname !== "/" ? "bg-white shadow text-black " : "text-white"
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
        {/* Right: Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {!user?.email ? (
            <Link to="/login">
              <Button className="bg-red-500 text-white">Sign In</Button>
            </Link>
          ) : (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <img
                  src={user?.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <div className="px-4 py-2 text-sm font-medium text-black">
                  {user.displayName}
                </div>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600"
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
            {!user?.email ? (
              <Link to="/login">
                <Button className="bg-red-500 text-white">Sign In</Button>
              </Link>
            ) : (
              <>
                <img
                  src={user?.photoURL}
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

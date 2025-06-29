import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-250px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

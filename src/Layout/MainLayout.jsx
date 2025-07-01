import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PricingPlans from "../Components/PricingPlans";
import ScrollToTop from "../Components/ScrollToTop";

function MainLayout() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-250px)]">
        <Outlet />
      </main>
      <PricingPlans />
      <Footer />
    </div>
  );
}

export default MainLayout;

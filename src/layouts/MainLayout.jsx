import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CartSideBar from "../components/CartSideBar";

const MainLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="bg-[#0b0b0b] h-full">
      <div className="bg-[#0b0b0b] text-white">
        <Navbar setIsCartOpen={setIsCartOpen}/>
      </div>
      <CartSideBar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

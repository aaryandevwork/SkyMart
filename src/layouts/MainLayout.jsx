import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CartSideBar from "../components/CartSideBar";

const MainLayout = () => {
  return (
    <div className="bg-[#0b0b0b] h-full">
      <div className="bg-[#0b0b0b] text-white">
        <Navbar />
      </div>
      <CartSideBar />
      <div className="pt-20">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

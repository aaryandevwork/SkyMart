import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#0b0b0b] h-full">
      <div className="bg-[#0b0b0b] text-white">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;

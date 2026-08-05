import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/authSlice";
import { NavLink } from "react-router";
import { toggleCart } from "../features/cartSlice";

const Navbar = ({}) => {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector(state => state.cart);

  return (
    <header className="w-full border-b border-white/10">
      <nav className="max-w-7xl mx-auto h-18 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-[#C8F400] flex items-center justify-center">
            <Zap className="text-black" size={18} fill="black" />
          </div>

          <h1 className="text-xl font-syne font-bold">
            <span className="text-white">Sky</span>
            <span className="text-[#C8F400]">Mart</span>
          </h1>
        </div>

        {/* Nav Links */}
        
        <div className="hidden md:flex items-center gap-6 font-medium text-sm">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "text-[#C8F400] hover:text-[#deebac] transition "
                : "text-white/60 hover:text-white transition";
            }}
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "text-[#C8F400] hover:text-[#deebac] transition "
                : "text-white/60 hover:text-white transition";
            }}
            to={"/main/shop"}
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "text-[#C8F400] hover:text-[#deebac] transition "
                : "text-white/60 hover:text-white transition";
            }}
            to={"/main/about"}
          >
            About
          </NavLink>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          {/* User */}

          <button className="flex items-center gap-3 border border-white/10 rounded-xl px-4 py-2 bg-zinc-900 hover:bg-zinc-800 transition">
            <div className="w-8 h-6 rounded-lg bg-[#C8F400] text-black flex items-center justify-center font-semibold">
              A
            </div>

            <p className="text-white text-sm font-medium max-w-[120px] truncate">
              Aaryan Dewangan
            </p>
          </button>

          {/* Cart */}

          <button className="w-10 h-10 rounded-xl border border-white/10 flex justify-center items-center hover:bg-zinc-900 transition">
            <ShoppingCart onClick={() => dispatch(toggleCart())} size={18} />
          </button>

          {/* Logout */}

          <button
            onClick={() => dispatch(removeUser())}
            className="w-10 h-10 rounded-xl border border-white/10 flex justify-center items-center hover:bg-zinc-900 transition"
          >
            <LogOut size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, setCartValue, toggleCart } from "../features/cartSlice";
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";

const CartSideBar = () => {
  let { cartItems, isCartOpen ,cartValue } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalBill = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ).toFixed(2);
  }, [cartItems]);

  useEffect(() => {
    dispatch(setCartValue(totalBill));
  },[cartItems])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => dispatch(toggleCart())}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-300 ${
          isCartOpen ? "opacity-90 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[420px] bg-[#121212]
        border-l border-zinc-700 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-18 border-b border-zinc-700">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-lime-400" size={22} />

            <h2 className="text-xl font-bold text-white font-syne">Cart</h2>

            <span className="bg-lime-400/20 text-[#C8F400] text-xs px-2 py-1 rounded-full">
              {cartItems.length} items
            </span>
          </div>

          <button
            onClick={() => dispatch(toggleCart())}
            className="text-zinc-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBag size={70} className="text-zinc-600 mb-5" />

              <h2 className="text-2xl font-syne text-white mb-2">
                Your cart is empty
              </h2>

              <p className="text-zinc-500 mb-8 max-w-xs">
                Looks like you haven't added any products yet.
              </p>

              <button
                onClick={() => dispatch(toggleCart())}
                className="px-8 h-12 rounded-2xl bg-[#C8F400]
        text-black font-semibold hover:bg-lime-300 transition"
              >
                Shop Now
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-zinc-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-400 text-lg">Total</span>

              <span className="text-2xl font-syne font-bold text-white">
                ${totalBill}
              </span>
            </div>

            <button
              onClick={() => {
                toast.success(`Order Placed..`);
                dispatch(clearCart())
              }}
              className="w-full h-12 rounded-2xl bg-[#C8F400]
            text-black font-semibold text-lg
            hover:bg-lime-300 transition
            flex items-center justify-center gap-2"
            >
              Checkout
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              className="w-full mt-4 text-zinc-500
            hover:text-red-400 transition"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartSideBar;

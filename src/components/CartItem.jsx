import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../features/cartSlice";

const CartItem = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <div className="border border-zinc-700 rounded-2xl p-4 flex gap-4">
            <img
              src={product.image}
              className="w-18 h-18 rounded-xl object-cover bg-white"
            />

            <div className="flex-1">
              <h3 className="text font-semibold text-white mt-[-5px]">
                {product.title}
              </h3>

              <p className="text font-syne font-bold text-[#C8F400] mt-2">
                ${product.price}
              </p>

              <p className="text-zinc-500 text-sm">${product.price} each</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <button onClick={() => dispatch(decreaseQuantity(product.id))} className="text-white w-6 h-6 rounded-lg border border-zinc-700 flex items-center justify-center hover:border-lime-400 transition">
                    <Minus size={13} />
                  </button>

                  <span className="text-white">{product.quantity}</span>

                  <button onClick={() => dispatch(increaseQuantity(product.id))} className="text-white w-6 h-6 rounded-lg border border-zinc-700 flex items-center justify-center hover:border-lime-400 transition">
                    <Plus size={13} />
                  </button>
                </div>

                <button onClick={() => dispatch(removeFromCart(product.id))} className="text-red-500 hover:text-red-400">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
    )
}

export default CartItem;
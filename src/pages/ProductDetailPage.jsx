import { useParams, Link, useNavigate } from "react-router";
import { useState } from "react";
import {
  Star,
  Heart,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  ShoppingBag,
} from "lucide-react";
import { products } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity, toggleCart } from "../features/cartSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const product = products.find((item) => item.id === Number(id));

  const cartItem = cartItems.find((item) => item.id === product.id);

  const isAdded = !!cartItem;

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}

      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
        <button onClick={() => navigate(-1)} className="hover:text-[#C8F400]">
          ← Products
        </button>

        <span>/</span>

        <span>{product.category}</span>

        <span>/</span>

        <span className="text-white">{product.title}</span>
      </div>

      {/* Main */}

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}

        <div className="bg-white rounded-3xl p-10">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* RIGHT */}

        <div>
          {/* Category */}

          <span className="px-4 py-1 rounded-full bg-lime-400/20 text-[#C8F400] text-sm font-semibold">
            {product.category}
          </span>

          {/* Title */}

          <h1 className="font-syne text-white text-3xl font-bold mt-6">
            {product.title}
          </h1>

          {/* Rating */}

          <div className="flex items-center gap-2 mt-6">
            {[1, 2, 3, 4].map((item) => (
              <Star
                key={item}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

            <Star size={18} className="text-zinc-600" />

            <span className="text-white font-semibold">{product.rating}</span>

            <span className="text-zinc-500">(200 reviews)</span>
          </div>

          {/* Price */}

          <div className="border-y border-zinc-700 py-7 mt-3">
            <h2 className="text-4xl font-bold text-[#C8F400]">
              ${product.price}
            </h2>
          </div>

          {/* Description */}

          <p className="text-zinc-400 leading-8 mt-3">{product.description}</p>

          {/* Quantity */}
          {isAdded ? (
            <div className="border border-zinc-700 rounded-2xl px-5 py-4 mt-4 flex justify-between items-center">
              <p className="text-zinc-400">In cart:</p>

              <div className="flex items-center gap-5">
                <button
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                  className="w-10 h-10 text-white rounded-xl border border-zinc-700 flex items-center justify-center hover:border-[#C8F400]"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-bold text-white">{cartItem?.quantity || 0}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(product.id))}
                  className="text-white w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-[#C8F400]"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Buttons */}

          <div className="flex gap-4 mt-6">
            <button 
            onClick={() => {
              !isAdded && dispatch(addToCart(product))
              dispatch(toggleCart())
            }}
            disabled={isAdded}
            className={`flex-1 h-14 rounded-2xl  font-bold flex justify-center items-center gap-2 ${isAdded ? "bg-green-950  border border-green-800  text-green-400 hover:bg-green-950" : "bg-[#C8F400] hover:bg-[#e1edaa] text-black"}`}>
              {isAdded ? ( <div className="flex gap-5 items-center"><Check size={18} />
              Added in Cart</div> ) : (<div className="flex gap-5 items-center"><ShoppingBag size={20} /> Add to Cart</div> )}
              
            </button>

            <button 
             className=" text-white w-14 rounded-2xl border border-zinc-700 hover:border-red-500 flex justify-center items-center">
              <Heart />
            </button>
          </div>

          <button onClick={() => dispatch(toggleCart())} className=" text-white w-full h-14 border border-zinc-700 rounded-2xl mt-5 hover:border-[#C8F400]">
            View Cart →
          </button>

          {/* Feature Cards */}

          <div className="grid grid-cols-3 gap-4 mt-7">
            <div className="border border-zinc-700 rounded-2xl p-5 text-center">
              <Truck size={22} className="mx-auto text-[#C8F400]" />

              <p className="text-white mt-2 font-semibold text-sm">
                Free Delivery
              </p>

              <p className="text-xs text-zinc-500 mt-1">On orders $50+</p>
            </div>

            <div className="border border-zinc-700 rounded-2xl p-5 text-center">
              <ShieldCheck size={22} className="mx-auto text-[#C8F400]" />

              <p className="text-white mt-2 font-semibold text-sm">
                Secure Pay
              </p>

              <p className="text-xs text-zinc-500 mt-1">256-bit SSL</p>
            </div>

            <div className="border border-zinc-700 rounded-2xl p-5 text-center">
              <RotateCcw size={22} className="mx-auto text-[#C8F400]" />

              <p className=" text-white mt-2 font-semibold text-sm">
                Easy Returns
              </p>

              <p className="text-xs text-zinc-500 mt-1">30-day policy</p>
            </div>
          </div>

          {/* Previous Next */}

          <div className="grid grid-cols-2 gap-4 mt-10">
            <button
              onClick={() => navigate(`/main/products/${id - 1}`)}
              className="text-white h-14 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center gap-2"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <button
              onClick={() => navigate(`/main/products/${Number(id) + 1}`)}
              className="h-14 rounded-2xl bg-[#C8F400] text-black hover:bg-[#a1b645] font-semibold flex items-center justify-center gap-2"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

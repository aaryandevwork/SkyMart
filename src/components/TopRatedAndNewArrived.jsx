import {
  ArrowRight,
  Star,
  Zap,
  ShoppingBag,
  Truck,
  Shield,
  Tag,
} from "lucide-react";

import { products } from '../data/data';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function TopRatedAndNewArrived() {

    const topRated = [...products].sort((a,b) => b.rating - a.rating).slice(0,5);
    const newArrivals = [...products].sort((a,b) => b.id - a.id).slice(0,5);

    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto mt-8">
      {/* Top Rated & New Arrivals */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Rated */}
        <div className="bg-[#181818] rounded-3xl border border-zinc-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />

              <h2 className="text-xl font-syne font-bold text-white">
                Top Rated
              </h2>
            </div>

            <button
            onClick={() => navigate("/main/shop")}
            className="flex items-center gap-1 text-[#C8F400] text-sm hover:gap-2 transition-all">
              See all
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {topRated.map((product) => (
              <div
              onClick={() => navigate(`/main/products/${product.id}`)}
                key={product.id}
                className="flex items-center justify-between rounded-2xl border border-zinc-700 bg-[#202020] px-3 py-2.5 hover:border-[#C8F400] transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt=""
                    className="w-12 h-12 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {product.title}
                    </h3>

                    <p className="text-[#C8F400] text-sm font-semibold">
                      ${product.price}
                    </p>
                  </div>
                </div>

                <button
                  className="w-9 h-9 rounded-xl bg-[#C8F400]/10
              text-[#C8F400] hover:bg-[#C8F400]
              hover:text-black transition flex items-center justify-center"
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}

        <div className="bg-[#181818] rounded-3xl border border-zinc-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="text-[#C8F400]" size={18} />

              <h2 className="text-xl font-syne font-bold text-white">
                New Arrivals
              </h2>
            </div>

            <button
            onClick={() => navigate("/main/shop")}
            className="flex items-center gap-1 text-[#C8F400] text-sm hover:gap-2 transition-all">
              See all
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {newArrivals.map((product) => (
              <div
                onClick={() => navigate(`/main/products/${product.id}`)}
                key={product.id}
                className="flex items-center justify-between rounded-2xl border border-zinc-700 bg-[#202020] px-3 py-2.5 hover:border-[#C8F400] transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt=""
                    className="w-12 h-12 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {product.title}
                    </h3>

                    <p className="text-[#C8F400] text-sm font-semibold">
                      ${product.price}
                    </p>
                  </div>
                </div>

                <button
                  className="w-9 h-9 rounded-xl bg-[#C8F400]/10
              text-[#C8F400] hover:bg-[#C8F400]
              hover:text-black transition flex items-center justify-center"
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}

      <div className="grid md:grid-cols-3 gap-5 mt-8">
        <div className="border border-zinc-700 rounded-2xl bg-[#181818] p-5 hover:border-[#C8F400] transition">
          <Truck className="text-[#C8F400]" size={22} />

          <h3 className="text-lg font-semibold text-white mt-3">
            Fast Delivery
          </h3>

          <p className="text-sm text-zinc-400 mt-1">Same-day on select items</p>
        </div>

        <div className="border border-zinc-700 rounded-2xl bg-[#181818] p-5 hover:border-blue-400 transition">
          <Shield className="text-blue-400" size={22} />

          <h3 className="text-lg font-semibold text-white mt-3">
            Secure Payments
          </h3>

          <p className="text-sm text-zinc-400 mt-1">100% encrypted checkout</p>
        </div>

        <div className="border border-zinc-700 rounded-2xl bg-[#181818] p-5 hover:border-green-400 transition">
          <Tag className="text-green-400" size={22} />

          <h3 className="text-lg font-semibold text-white mt-3">Best Prices</h3>

          <p className="text-sm text-zinc-400 mt-1">Price-match guarantee</p>
        </div>
      </div>
    </div>
  );
}

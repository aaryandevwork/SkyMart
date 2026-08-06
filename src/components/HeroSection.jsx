import { ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const HeroSection = () => {
  
const { user } = useSelector(state => state.auth);
const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto mt-5">

      <div className="relative overflow-hidden rounded-[30px] border border-white bg-[#111111]">

        {/* Grid Background */}

        <div className="absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:46px_46px]" />

        {/* Glow */}

        <div className="absolute left-40 top-40 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between px-10 py-10">

          {/* Left */}

          <div className="max-w-2xl">

            <p className="uppercase tracking-[2px] text-[#C8F400] font-semibold mb-3 text-sm">
              Good Afternoon 👋
            </p>

            <h1 className="font-syne text-5xl  font-bold">

              <span className="text-white">
                Welcome back,
              </span>

              <br />

              <span className="text-[#C8F400]">
                {user.name}
              </span>

            </h1>

            <p className="mt-3 text-zinc-400 text-base max-w-xl">
              Discover today's picks — hand-crafted products across <br />
              electronics, fashion, home, and more.
            </p>

            <div className="flex gap-5 mt-10">

              <button
              onClick={() => navigate("/main/shop")}
               className="flex items-center gap-2 bg-[#C8F400] text-sm text-black px-6 rounded-2xl font-semibold hover:scale-105 transition">

                Shop Now

                <ArrowRight size={20} />

              </button>

              <button
              onClick={() => navigate("/main/shop")}
              className="border border-white/20 px-6 py-3 rounded-2xl text-white hover:bg-white/5 transition">
                View All Products
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:flex flex-col justify-center items-center not-only: gap-5">

            <div className="bg-lime-500/15 border border-lime-400/20 rounded-2xl w-40 h-28 flex flex-col justify-center items-center">

              <h2 className="text-3xl font-bold text-[#C8F400] font-syne">
                20+
              </h2>

              <p className="text-zinc-300 text-sm">
                Products Available
              </p>

            </div>

            <div className="border border-white/30 rounded-2xl w-40 h-28 flex flex-col justify-center items-center">

              <h2 className="text-3xl font-bold text-white">
                Free
              </h2>

              <p className="text-zinc-500 text-sm">
                Delivery on ₹999+
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
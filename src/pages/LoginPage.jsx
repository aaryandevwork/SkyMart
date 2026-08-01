import { ArrowRight, Eye, Lock, Mail, Zap } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 border-r border-zinc-700 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-24 top-40 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col w-full p-14">
          {/* Logo */}
          <div className="flex items-center gap-3 h-[10%]">
            <div className="h-10 w-10 rounded-2xl bg-[#C8F400] flex items-center justify-center">
              <Zap className="text-black" size={18} fill="black" />
            </div>

            <h2 className="text-2xl font-syne tracking-tight font-semibold">
              <span className="text-white">Sky</span>
              <span className="text-[#C8F400]">Mart</span>
            </h2>
          </div>

          {/* Hero */}
          <div className="h-[90%] flex flex-col justify-center gap-12">

          <div className="space-y-2 max-w-xl ">
            <p className="uppercase  text-[#C8F400] font-semibold">
              Welcome Back
            </p>

            <h2 className="text-5xl font-bold font-syne leading-tight text-white">
              Shop the future.
              <br />
              <span className="text-[#C8F400]">Today.</span>
            </h2>

            <p className="text-zinc-500 font-semibold font-syne text mt-6">
              Thousands of products, lightning-fast delivery, and <br />
               prices that make your wallet happy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 ">
            <div className="border border-white rounded-2xl py-4 ">
              <h3 className="text-center text-xl font-syne font-bold text-[#C8F400]">
                20K+
              </h3>
              <p className="text-center text-sm text-zinc-500">Products</p>
            </div>
            <div className="border border-white rounded-2xl py-4 ">
              <h3 className="text-center text-xl font-syne font-bold text-[#C8F400]">
                50K+
              </h3>
              <p className="text-center text-sm text-zinc-500">Users</p>
            </div>
            <div className="border border-white rounded-2xl py-4 ">
              <h3 className="text-center text-xl font-syne font-bold text-[#C8F400]">
                4.9★
              </h3>
              <p className="text-center text-sm text-zinc-500">Rating</p>
            </div>
          </div>
            </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#131313] p-10 shadow-2xl">
          <h2 className="text-2xl font-syne font-bold text-white">Sign in</h2>

          <p className="mt-1 font-syne text-zinc-500">
            Enter your credentials to continue
          </p>

          <form className="mt-10 space-y-3">
            {/* Email */}

            <div className="relative">
              <Mail
                size={15}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-zinc-700 bg-[#1d1d1d] py-3 pl-12 pr-4 text-sm text-gray-400 font-semibold outline-none transition focus:border-lime-400"
              />
            </div>

            {/* Password */}

            <div className="relative">
              <Lock
                size={15}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-zinc-700 bg-[#1d1d1d] py-3 pl-12 pr-14 text-sm text-gray-400 font-semibold outline-none transition focus:border-lime-400"
              />

              <Eye
                size={15}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
              />
            </div>

            {/* Button */}

            <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#C8F400] py-3 text-md font-syne font-semibold text-black transition hover:bg-lime-300">
              Sign in
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
              />
            </button>
          </form>

          <p className="mt-5 text-center text-zinc-500">
            Don't have an account?{" "}
            <span className="cursor-pointer font-semibold text-[#C8F400] hover:underline">
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

function StatCard({ number, text }) {
  return (
    <div className="rounded-3xl border border-zinc-600 bg-white/5 py-8 text-center backdrop-blur-sm">
      <h3 className="text-4xl font-bold text-[#C8F400]">{number}</h3>

      <p className="mt-2 text-lg text-zinc-400">{text}</p>
    </div>
  );
}

export default LoginPage;

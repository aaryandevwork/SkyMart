const Footer = () => {
  return (
    <footer className="border-t border-white bg-[#0b0b0b] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        {/* Logo */}
        <h2 className=" font-bold text-[#C8F400]">
          SkyMart
        </h2>

        {/* Copyright */}
        <p className="mt-2 text-xs text-zinc-500 text-center">
          © 2025 SkyMart • Built with{" "}
          <span className="text-zinc-300">React</span> +{" "}
          <span className="text-zinc-300">Redux</span> +{" "}
          <span className="text-zinc-300">TanStack Query</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
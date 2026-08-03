import ProductCard from "../components/ProductCard";
import { products } from "../data/data";
import { Search } from "lucide-react";

const ShopPage = () => {
  console.log(products);

  return (
    <div className="px-35 py-5 flex flex-col ">
      <section className="mb-10">
        <h1 className="font-syne text-4xl font-bold text-white">
          All Products
        </h1>

        <p className="mt-3 text-zinc-500">25 products found</p>
      </section>

      <div className="rounded-2xl border border-white bg-[#141414] p-5">
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Search */}

          <div className="lg:col-span-8 relative border border-white/15 rounded-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              placeholder="Search products..."
              className="
                w-full
                bg-[#1d1d1d]
                rounded-2xl
                text-white
                text-sm
                pl-14
                pr-2
                py-2
                transition-all
    duration-300
    focus:border-lime-400
    focus:ring-4
    focus:ring-lime-400/20
                outline-none
                "
            />
          </div>

          {/* Category */}

          <select
            className="lg:col-span-2 bg-[#1d1d1d] rounded-2xl px-5 text-white transition-all
    duration-300
    focus:border-lime-400
    focus:ring-4
    focus:ring-lime-400/20 "
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>

          {/* Sort */}

          <select
            className="lg:col-span-2 bg-[#1d1d1d] rounded-2xl px-5 text-white transition-all
    duration-300
    focus:border-lime-400
    focus:ring-4
    focus:ring-lime-400/20"
          >
            <option>Featured</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>
      </div>

      <div className="grid mt-12 gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

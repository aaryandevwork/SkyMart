import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories, products, sortOptions } from "../data/data";
import { Search } from "lucide-react";
import { useEffect } from "react";

const ShopPage = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [search, setSearch] = useState("");

  
  const getFilteredData = () => {
    let filteredData = [...products];

    if (search.trim()) {
      filteredData = filteredData.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (selectedCategory !== "All") {
      filteredData = filteredData.filter((product) => {
        return product.category === selectedCategory;
      });
    }

    switch (sortBy) {
      case "Price: Low to High":
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filteredData.sort((a, b) => b.price - a.price);
        break;
      case "Highest Rated":
        filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
        filteredData.sort((a, b) => b.id - a.id);
        break;
      default:
        filteredData.sort((a, b) => b.featured - a.featured);
        break;
    }
    console.log("called");
    return filteredData;
  };

  const finalProducts = useMemo(() => {
    return getFilteredData();
  }, [products, search, selectedCategory, sortBy]);

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
              onChange={(e) => setSearch(e.target.value)}
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
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="lg:col-span-2 bg-[#1d1d1d] rounded-2xl px-5 text-white transition-all
    duration-300
    focus:border-lime-400
    focus:ring-4
    focus:ring-lime-400/20 "
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Sort */}

          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="lg:col-span-2 bg-[#1d1d1d] rounded-2xl px-5 text-white transition-all duration-300 focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20"
          >
            {sortOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid mt-12 gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {finalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

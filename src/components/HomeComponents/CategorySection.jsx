import {ArrowRight, Laptop, Shirt, Sofa, House, Dumbbell, Watch } from "lucide-react";
import { useNavigate } from "react-router";
import { products } from "../../data/data";

const categories = [
  {
    id: 1,
    icon: Laptop,
    title: "Electronics",
    items: products.filter((p) => p.category === "Electronics").length,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: Shirt,
    title: "Fashion",
    items: products.filter((p) => p.category === "Fashion").length,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: 3,
    icon: Sofa,
    title: "Furniture",
    items: products.filter((p) => p.category === "Furniture").length,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 4,
    icon: House,
    title: "Home",
    items: products.filter((p) => p.category === "Home").length,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 5,
    icon: Dumbbell,
    title: "Sports",
    items: products.filter((p) => p.category === "Sports").length,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: 6,
    icon: Watch,
    title: "Accessories",
    items: products.filter((p) => p.category === "Accessories").length,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
const CategorySection = () => {

  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto mt-16">
      {/* Heading */}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold font-syne text-white">Shop by Category</h2>

        <button
        onClick={() => navigate("/main/shop")}
        className="flex text-sm items-center gap-2 text-lime-400 hover:gap-3 transition-all font-medium">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Categories */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
            onClick={() => navigate(`/main/shop?category=${encodeURIComponent(category.title)}`)}
              key={category.id}
              className="group bg-white rounded-xl py-6 px-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.iconBg}`}
              >
                <Icon size={24} className={category.iconColor} />
              </div>

              <h3 className="font-semibold text-black">
                {category.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {category.items} items
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;

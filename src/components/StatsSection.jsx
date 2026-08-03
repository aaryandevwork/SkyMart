import { Package, TrendingUp, Star, Tag } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "0",
    title: "Cart Items",
    subtitle: "In your bag",
    color: "bg-lime-500/15 text-lime-400",
  },
  {
    icon: TrendingUp,
    value: "$0.00",
    title: "Cart Value",
    subtitle: "Ready to checkout",
    color: "bg-blue-500/15 text-blue-400",
  },
  {
    icon: Star,
    value: "5",
    title: "Top Products",
    subtitle: "Highly rated",
    color: "bg-yellow-500/15 text-yellow-400",
  },
  {
    icon: Tag,
    value: "6",
    title: "Categories",
    subtitle: "To explore",
    color: "bg-purple-500/15 text-purple-400",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="border border-white rounded-3xl px-8 py-5 bg-[#111111] flex"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <div>
                <h2 className="ml-2 text-2xl font-bold text-white font-syne">{item.value}</h2>

                <p className="ml-2 text-base text-zinc-400">{item.title}</p>

                <p className="text-zinc-500 ml-2 text-sm">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;

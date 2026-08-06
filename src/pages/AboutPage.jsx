import {
  ShieldCheck,
  Truck,
  Star,
  Users,
  Zap,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const stats = [
  {
    icon: <ShieldCheck size={22} />,
    value: "20K+",
    label: "Products",
  },
  {
    icon: <Users size={22} />,
    value: "50K+",
    label: "Happy Customers",
  },
  {
    icon: <Star size={22} />,
    value: "4.9",
    label: "Avg Rating",
  },
  {
    icon: <Truck size={22} />,
    value: "99%",
    label: "On-time Delivery",
  },
];

const Quality = [
  {
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
    icon: ShieldCheck,
  },
  {
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
    icon: Truck,
  },
  {
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
    icon: Users,
  },
  {
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
    icon: Star,
  },
];

const teamMembers = [
  {
    name: "Aryan Shah",
    role: "Founder & CEO",
    color: "bg-[#C8F400]",
    initial: "A",
  },
  {
    name: "Priya Mehta",
    role: "Head of Product",
    color: "bg-blue-500",
    initial: "P",
  },
  {
    name: "Rohan Verma",
    role: "Lead Engineer",
    color: "bg-purple-500",
    initial: "R",
  },
  {
    name: "Sneha Kapoor",
    role: "Design Lead",
    color: "bg-pink-500",
    initial: "S",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-66 py-16 font-syne">
      <div className="mx-auto max-w-300">
        {/* Hero */}

        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-14 w-14 animate-[floatY_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-[#C8F400] text-black shadow-[0_0_50px_rgba(200,244,0,.35)]">
            <Zap size={26} fill="currentColor" />
          </div>

          <h1 className="font-syne text-5xl font-bold">
            About <span className="text-[#C8F400]">SkyMart</span>
          </h1>

          <p className="mt-3 max-w-2xl font-dm-regular text-lg leading-8 text-zinc-500">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair and enjoyable for everyone.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white bg-[#111111] px-2 py-4 transition duration-30"
            >
              <div className="flex justify-center text-[#C8F400]">
                {item.icon}
              </div>

              <h2 className="mt-1 text-center font-syne text-2xl">
                {item.value}
              </h2>

              <p className="mt-2 text-center font-syne text-sm text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Story */}

        <section className="mt-14 rounded-3xl border border-white bg-[#111111] p-10">
          <h2 className="font-syne text-3xl font-bold">Our Story</h2>

          <div className="mt-7 space-y-6 font-dm-regular text-sm text-zinc-400">
            <p>
              SkyMart started in <span className="text-white">2022</span> as a
              small side project — two engineers tired of bloated, slow
              e-commerce experiences. We asked ourselves: what if shopping
              online was actually enjoyable?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </section>
        {/* Values */}

        <section className="mt-16">
          <h2 className="text-center font-syne text-3xl font-bold">
            What We Stand For
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Quality.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-white bg-[#111111] p-7 transition duration-30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8F400]/10 text-[#C8F400]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-dm-bold text-xl">{item.title}</h3>

                    <p className="mt-2 font-dm-regular leading-7 text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team */}

        <section className="mt-16">
          <h2 className="text-center font-syne text-3xl font-bold">
            Meet the Team
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white bg-[#111111] p-4 text-center"
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${member.color} font-dm-bold text-black`}
                >
                  {member.initial}
                </div>

                <h3 className="mt-5 font-dm-bold">{member.name}</h3>

                <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        <section className="mt-16 rounded-3xl border border-[#C8F400]/40 bg-[#111111] px-10 py-10 text-center">
          <h2 className="font-syne text-2xl font-bold">Ready to shop?</h2>

          <p className="mx-auto mt-4 max-w-xl font-dm-regular text-zinc-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            className="mt-4 inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-[#C8F400] px-4 py-3 font-syne text-md text-black transition duration-300 hover:bg-[#d7ff28]"
            onClick={() => navigate("/main/shop")}
          >
            Browse Products
            <ArrowRight size={18} fill="currentColor" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

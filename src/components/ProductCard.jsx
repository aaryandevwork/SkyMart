import { ShoppingBag, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-[#141414]
      border
      border-white/10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-lime-400/30
      hover:shadow-[0_20px_40px_rgba(163,230,53,0.08)]
      "
    >
      {/* Product Image */}

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.title}
          className="
          w-full
          h-54
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />

        {/* Category */}

        <span
          className="
          absolute
          left-4
          top-4
          rounded-full
          bg-black/70
          px-4
          py-1
          text-xs
          font-medium
          text-white
          backdrop-blur-md
          "
        >
          {product.category}
        </span>

        {/* Discount */}

        {/* <span
          className="
          absolute
          right-4
          top-4
          rounded-full
          bg-lime-400
          px-4
          py-1
          text-sm
          font-semibold
          text-black
          "
        >
          -{product.discount}%
        </span> */}
      </div>

      {/* Body */}

      <div className="p-5">

        {/* Brand */}

        <p className="text-xs text-zinc-500">
          {product.brand}
        </p>

        {/* Title */}

        <h2 className="mt-2 text-sm font-semibold text-white line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}

        <div className="mt-4  text-sm flex items-center gap-2">

          <Star
            size={18}
            fill="#C7FF00"
            className="text-[#C8F400]"
          />

          <span className="text-white font-medium">
            {product.rating}
          </span>

          <span className="text-zinc-500">
            ({product.reviews})
          </span>

        </div>

        <div className="w-full h-[1px] bg-white my-2"></div>
        {/* Price */}

        <div className="mt-2 flex  items-center justify-between">

          <div className="flex items-end gap-2">

            <span className="text-sm font-bold text-[#C8F400]">
              ${product.price}
            </span>

            <span className="text-sm text-zinc-500 line-through">
              ${product.oldPrice}
            </span>

          </div>

          {/* Add To Cart */}

          <button
            className="
            h-12
            w-12
            rounded-2xl
            bg-[#C8F400]
            text-black
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
            hover:rotate-6
            "
          >
            <ShoppingBag size={20} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
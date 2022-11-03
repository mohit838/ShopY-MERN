import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Items = ({ id, title, text, rating, btn, img, price, color, shadow }) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}
      >
        {/* Text Content */}
        <div className="grid items-center justify-items-center">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p>{text}</p>

          <div>
            <div>
              <h1>{price}</h1>
            </div>
            <div>
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1>{rating}</h1>
            </div>
          </div>

          {/* Buy Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            >
              {btn}
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div>
          <img src={img} alt={`img/item-img/${id}`} className="" />
        </div>
      </div>
    </>
  );
};

export default Items;

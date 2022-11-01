import React from "react";
import Clips from "./utils/Clips";
import Socials from "./utils/Socials";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        {/* Gradients BG */}
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 right-0 left-0 opacity-100 z-10"></div>

        {/* Hero all content as text*/}
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center  mt-28 md:mt-24">
            {/* Hero Headings */}
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>

            {/* Hero Button */}
            <button
              typpe="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-lg my-5"
            >
              {btntext}
            </button>

            {/* Video Links */}
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>

            {/* Social Links */}
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks?.map((val, i) => (
                <Socials key={i} icon={val.icon} />
              ))}
            </div>
          </div>

          {/* Hero Img content */}
          <div className="">
            <img
              src={img}
              alt="hero-img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

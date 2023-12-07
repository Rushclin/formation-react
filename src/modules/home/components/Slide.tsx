import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          {title}
        </span>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>

        <h3 className="text-[24px] text-gray-500">
          A partir de{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
        </h3>

        <button className="mt-4 group relative inline-block focus:outline-none focus:ring">
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
            Ajouter au panier
          </span>
        </button>
      </div>

      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;

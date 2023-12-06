import React from "react";
import Logo from "../../components/Logo/Logo";
import { useRouter } from "next/router";

const HeaderMain = () => {

  const router = useRouter()
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Logo />
        </div>

        <div className="relative w-full m:w-[300px] md:w-[70%]">
          <label htmlFor="Search" className="sr-only">
            Rechercher
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Rechercher un produit "
            className="w-full rounded-md border-yellow-300 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className="hidden lg:flex">
            <button className="group relative inline-block focus:outline-none focus:ring mx-1" onClick={() => router.push('panier')}>
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                Panier (2)
              </span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default HeaderMain;

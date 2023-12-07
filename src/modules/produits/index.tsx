import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";
import FiltresProduit from "./components/filtres";
import { useProduitApi } from "./api";

const ProduitModule = () => {
  const produits = useProduitApi().useSelecAllQuery({});

  const { isLoading, data } = produits;

  return (
    <>
      <div className="container">
        <section>
          <div className="py-8 sm:py-12">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Liste de tous nos produits.
              </h2>

              <p className="mt-4 max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </header>

            <div className="mt-8 block lg:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium">
                  {" "}
                  Differents filtres{" "}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 lg:mt-8 ">
              <FiltresProduit />

              <div className="mt-10 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {isLoading || !data ? (
                  <>
                    <h1>Chargement des produits en cours...</h1>
                  </>
                ) : (
                  data.map((item, index) => (
                    <ProductCard key={index} produit={item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProduitModule;

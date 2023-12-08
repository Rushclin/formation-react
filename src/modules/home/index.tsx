import Hero from "@/modules/home/components/Hero";
import React from "react";
import { useProduitApi } from "../produits/api";
import ProductCard from "@/components/ProductCard/ProductCard";

const HomeModule = () => {
  const produits = useProduitApi().useSelectManyQuery({});

  const { isLoading, data } = produits;

  return (
    <>
      <Hero />
      {isLoading || !data ? (
        <>
          <h1>Chargement en cours des produits</h1>
        </>
      ) : (
        <div className="container">
          <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl my-16">
                Nos produits phares
              </h1>
            </header>
          <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {data.map((produit) => (
              <ProductCard produit={produit} key={produit.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeModule;

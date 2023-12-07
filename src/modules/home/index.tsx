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
          <h2 className="font-medium text-2xl pb-4">
            Nos produits en promotion
          </h2>
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

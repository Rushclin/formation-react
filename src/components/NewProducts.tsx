import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { produits } from "@/data/produits";

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Liste de nos produits</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {produits.map((item, index) => (
            <ProductCard
              key={index}
              produit={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

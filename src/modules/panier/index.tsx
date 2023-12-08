import { RootState } from "@/configs/store";
import React from "react";
import { useSelector } from "react-redux";
import PanierItem from "./components/PanierItem";
import { Button } from "@/components/Buttons/Buttons";

const PanierModule = () => {
  const panier = useSelector((state: RootState) => state.panier);
  const { prixTotal, prixTotalTTC, tva } = panier;

  return (
    <>
      <section className="container pt-16">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-10">
                Votre panier
              </h1>

              <h6 className="mb-10">Tous les produits de votre panier.</h6>
            </header>

            {panier.produits.length === 0 ? (
              <>
                <h1 className="text-center my-10">Votre panier est vide.</h1>
              </>
            ) : (
              <>
                <ul className="space-y-4">
                  {panier.produits.map((produit) => (
                    <PanierItem produit={{ ...produit }} key={produit.id} />
                  ))}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Sous-total</dt>
                        <dd>{prixTotal} Fr</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>TVA</dt>
                        <dd>{tva} Fr</dd>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>{prixTotalTTC} Fr</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <Button
                        action={() => {}}
                        title="Commander maintenant"
                        disabled={panier.produits.length === 0}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PanierModule;

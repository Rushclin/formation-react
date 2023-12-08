import { ProduitType } from "./produits";

export interface ExtendProduit extends ProduitType{
  quantite: number;
}

export interface CommandeType {
  id?: number;
  produits: ExtendProduit[];
  prixTotal: number;
  tva: number;
  prixTotalTTC: number;
}

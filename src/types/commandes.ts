import { ProduitType } from "./produits";

export interface CommandeType {
  id: number;
  produits: ProduitType[];
  prixTotal: number;
  tva: number;
  prixTotalTTC: number;
}

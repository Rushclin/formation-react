import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommandeType } from "./../../types/commandes";
import { ProduitType } from "@/types/produits";

const initialState: CommandeType = {
  prixTotal: 0,
  prixTotalTTC: 0,
  produits: [],
  tva: 0,
};

const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{ produit: ProduitType; quantite: number }>
    ) => {
      const { produit, quantite } = action.payload;

      const existingProduit = state.produits.find(
        (item) => item.id === produit.id
      );

      if (existingProduit) {
        existingProduit.quantite += quantite;
      } else {
        state.produits.push({ quantite, ...produit });
      }

      // Recalculer le panier après l'ajout
      recalculateCart(state);
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ produit: ProduitType; quantite: number }>
    ) => {
      const { produit, quantite } = action.payload;

      // Retirer l'article du panier
      state.produits = state.produits.filter((item) => item.id !== produit.id);

      // Recalculer le panier après la suppression
      recalculateCart(state);

      // On recalcule le panier
      state.prixTotal -= produit.prix * quantite;
      state.prixTotalTTC -= state.prixTotal;

    },
    updateCartItemQuantity: (state,  action: PayloadAction<{ produit: ProduitType; quantite: number }>) => {
      
    const { produit, quantite } = action.payload;

     const existingProduit = state.produits.find((p) => p.id === produit.id)
     if (existingProduit) {
      existingProduit.quantite = quantite;
     }
     recalculateCart(state);


      // if (cartItem) {
      //   cartItem.quantity = quantity;
      // }
    },
    clearCart: (state) => {
      state.produits = [];
      state.prixTotal = 0;
      state.tva = 0;
      state.prixTotalTTC = 0;
    },
  },
});

// Fonction pour recalculer le panier
const recalculateCart = (state: CommandeType) => {
  state.prixTotal = state.produits.reduce((total, item) => {
    return total + item.prix * item.quantite;
  }, 0);

  state.tva = state.produits.reduce((totalTva, item) => {
    return totalTva + (item.prix * item.quantite * item.tva) / 100;
  }, 0);

  state.prixTotalTTC = state.prixTotal + state.tva;
};

export const { addItemToCart, clearCart, removeItemFromCart, updateCartItemQuantity } =
  panierSlice.actions;

export default panierSlice.reducer;

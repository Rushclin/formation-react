import { ProduitType } from "@/types/produits";

export const produits: ProduitType[] = [
  {
    id: 0,
    description: "",
    image: "",
    nom: "",
    prix: 0,
    tva: 0,
  },

  {
    image: "/jacket-1.jpg",
    nom: "Jacket",
    description: "MEN Yarn Fleece Full-Zip Jacket",
    prix: 45,
    id: 1,
    tva: 10,
  },
  {
    image: "/skirt-1.jpg",
    nom: "Skirt",
    description: "Black Floral Wrap Midi Skirt",
    prix: 55,
    id: 2,
    tva: 10,
  },
  {
    image: "/party-wear-1.jpg",
    nom: "Party Wear",
    description: "Women's Party Wear Shoes",
    prix: 25,
    id: 3,
    tva: 10,
  },
  {
    image: "/shirt-1.jpg",
    nom: "Shirt",
    description: "Pure Garment Dyed Cotton Shirt",
    prix: 45,
    id: 4,
    tva: 10,
  },
  {
    image: "/sports-1.jpg",
    nom: "Sports",
    description: "Trekking & Running Shoes - Black",
    prix: 58,
    id: 5,
    tva: 10,
  },
  {
    image: "/watch-1.jpg",
    nom: "Watches",
    description: "Smart Watches Vital Plus",
    prix: 100,
    id: 6,
    tva: 10,
  },
  {
    image: "/watch-2.jpg",
    nom: "Watches",
    description: "Pocket Watch Leather Pouch",
    prix: 120,
    id: 7,
    tva: 10,
  },
];

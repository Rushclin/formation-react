export const app = {
  id: "e-commerce" as const,
  shortName: "Site de E-Commerce" as const,
  fullName: "Site de E-Commerce" as const,
  logoName: "Site de E-Commerce" as const,
  author: "Rushclin Takam" as const,
  description: "Un petit projet de formation" as const,
  keywords: "#ecommerce #rushclin #takam" as const,
  themeColor: "#333e51" as const,
  supportedLngs: ["en", "fr"] as const,
  currency: "EUR",

  homeLinks: [
    {
      id: 0, 
      title: "Acceuil", 
      lien: "/"
    },
    {
      id: 1, 
      title: "Hommes", 
      lien: "#"
    },
    {
      id: 3, 
      title: "Femmes", 
      lien: "#"
    },
    {
      id: 4, 
      title: "Parfums", 
      lien: "#"
    },
    {
      id: 5, 
      title: "Robes", 
      lien: "#"
    },
    {
      id: 6, 
      title: "Enfants", 
      lien: "#"
    },
    {
      id: 7, 
      title: "Tous", 
      lien: '/produits'
    }
  ] as const,
  slideData : [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Promotion",
      mainTitle: "Femme en vogue",
      price: "12000 Fr",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Promotion",
      mainTitle: "Lunette de soleil moderne",
      price: "1525 Fr",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Meilleure offre",
      mainTitle: "Nouveautes",
      price: "3000 Fr",
    },
  ] as const
};

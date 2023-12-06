import React from "react";

const HeaderTop = () => {
  return (
    <div className="bg-yellow-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        Vous aimez notre plateforme ? {" "}
        <a href="#" className="inline-block underline">Cette semaine, course gratuite pour les abonnés !</a>
      </p>
    </div>
  );
};

export default HeaderTop;

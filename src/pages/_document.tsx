import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <div className="cursor-dot" data-cursor-dot />
        <div className="cursor-outline" data-cursor-outline />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

import React from "react";

interface Props {
  title?: string;
  action: () => void;
}

const Button: React.FC<Props> = (props) => {
  
  const { action, title } = props;

  return (
    <button
      className="mt-4 group relative inline-block focus:outline-none focus:ring w-full"
      onClick={action}
    >
      <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

      <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest w-full">
        {title ? title : "Bouton"}
      </span>
    </button>
  );
};

export {Button}

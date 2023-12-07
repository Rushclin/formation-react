import React from "react";

interface Props {
  title?: string;
  action: () => void;
}

interface PropsIconButton {
  title?: string;
  action: () => void;
  icon: React.ReactNode;
  nombre?: number;
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

const IconButton: React.FC<PropsIconButton> = (props) => {
  const { action, icon, title, nombre } = props;
  return (
    <button
      className="relative w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-600"
      onClick={action}
    >
      {icon ? (
        icon
      ) : (
        <svg
          className="h-5 w-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}

      {nombre && (
        <span className="absolute top-0 right-0 block w-5 h-5 bg-red-500 border-1 border-white rounded-full text-center text-white text-xs font-bold">
          {nombre}
        </span>
      )}
    </button>
  );
};

export { Button, IconButton };

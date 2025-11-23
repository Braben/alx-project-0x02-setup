import { type ButtonProps } from "@/interfaces";

const ButtonProps: React.FC<ButtonProps> = ({
  label,
  onClick,
  shapes,
  sizes,
  className = "",
}) => {
  const sizesClass = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  const shapesClass = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-lg": "rounded-lg",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      className={`bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        sizesClass[sizes || "medium"]
      } ${shapesClass[shapes || "rounded-md"]} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonProps;

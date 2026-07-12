import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode; // optional icon prop
  disable?: boolean;
  className?: string;
  size?: "small" | "medium";
}

function Button({ text, icon, disable, className = "", size = "medium" }: ButtonProps) {
  const sizeClasses = size === "small"
    ? "py-2 px-3 md:px-4 text-xs md:text-sm rounded-lg"
    : "my-4 py-3 px-1 md:px-5 text-sm md:text-base rounded-xl";

  return (
    <button
      disabled={disable} // <-- actually disables the button
      className={`${sizeClasses} w-fit whitespace-nowrap font-medium tagesschrift-regular flex items-center justify-center gap-2 transition-colors delay-75 ease-in-out
        ${
          disable
            ? "bg-red-300 cursor-not-allowed text-black"
            : "bg-gray-300 cursor-pointer text-black hover:bg-white"
        } ${className}`}
    >
      <span>{text}</span>
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}

export default Button;

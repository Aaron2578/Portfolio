import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode; // optional icon prop
  disable?: boolean;
}

function Button({ text, icon, disable }: ButtonProps) {
  return (
    <button
      disabled={disable} // <-- actually disables the button
      className={`my-4 py-3 px-1 md:px-5 w-fit rounded-xl font-medium tagesschrift-regular flex items-center gap-2 transition-colors delay-75 ease-in-out
        ${
          disable
            ? "bg-red-300 cursor-not-allowed text-black"
            : "bg-gray-300 cursor-pointer text-black hover:bg-white"
        }`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
}

export default Button;

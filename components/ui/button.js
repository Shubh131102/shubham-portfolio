import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
}

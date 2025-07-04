import React from "react";

export function Card({ children, ...props }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }) {
  return <div className="space-y-4" {...props}>{children}</div>;
}

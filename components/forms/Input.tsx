import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-1 font-semibold text-neutral">{label}</label>
      )}

      <input
        {...props}
        className={`border p-2 rounded focus:outline-none focus:ring-2
          ${error ? "border-danger focus:ring-danger" : "border-neutral focus:ring-primary"}
        `}
      />

      {error && <span className="text-danger text-sm mt-1">{error}</span>}
    </div>
  );
}

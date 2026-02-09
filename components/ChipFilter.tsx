"use client";
import React from "react";

interface ChipFilterProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function ChipFilter({ options, selected, onChange }: ChipFilterProps) {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {options.map((option) => (
        <button
          key={option}
          className={`px-3 py-1 rounded-full border ${
            selected.includes(option)
              ? "bg-primary text-white border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
          onClick={() => toggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-auto bg-gray-900 text-white transition-all duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      {/* App Name */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {open && <span className="text-lg font-bold">My NextJS Library</span>}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm bg-gray-700 px-2 py-1 rounded"
        >
          {open ? "<" : ">"}
        </button>
      </div>
   <div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-800"
        >
          {open ? "Forms" : "F"}
          {open && <span>{open ? "▲" : "▼"}</span>}
        </button>

        {/* Sublinks */}
        {open && (
          <div className="ml-4 mt-1 space-y-1">
            <Link
              href="/components/forms/playground"
              className="block p-2 rounded hover:bg-gray-800"
            >
              Playground
            </Link>
            <Link
              href="/components/forms/components"
              className="block p-2 rounded hover:bg-gray-800"
            >
              Components
            </Link>
          </div>
        )}
      </div>

      {/* Links */}
      <nav className="p-2 space-y-2">
        <Link href="/components/buttons" className="block p-2 rounded hover:bg-gray-800">
          {open ? "Buttons" : "B"}
        </Link>

        <Link href="/components/tables" className="block p-2 rounded hover:bg-gray-800">
          {open ? "Tables" : "T"}
        </Link>  

        <Link href="/components/layouts" className="block p-2 rounded hover:bg-gray-800">
          {open ? "Layouts" : "L"}
        </Link>  
        
          <Link href="/components/themes/colours" className="block p-2 rounded hover:bg-gray-800">
          {open ? "Colours" : "C"}
        </Link>
      </nav>
    </div>
  );
}

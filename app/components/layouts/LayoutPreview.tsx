"use client";
import React, { ReactNode, useState } from "react";
import ComponentDemo from "@/components/ComponentDemo";

interface LayoutPreviewProps {
  title: string;
  layoutComponent: ReactNode;
  code: string;
}

export default function LayoutPreview({ title, layoutComponent, code }: LayoutPreviewProps) {
  const [width, setWidth] = useState(1024);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleDeviceChange = (d: "desktop" | "tablet" | "mobile") => {
    setDevice(d);
    if (d === "desktop") setWidth(1024);
    if (d === "tablet") setWidth(768);
    if (d === "mobile") setWidth(375);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Layout's own sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <nav className="space-y-2">
          <span className="block p-2 rounded hover:bg-gray-800">Menu 1</span>
          <span className="block p-2 rounded hover:bg-gray-800">Menu 2</span>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6">
        {/* Device Switcher */}
        <div className="flex gap-2 mb-4">
          {["desktop", "tablet", "mobile"].map((d) => (
            <button
              key={d}
              onClick={() => handleDeviceChange(d as any)}
              className={`px-3 py-1 rounded border ${
                device === d
                  ? "bg-primary text-white border-primary"
                  : "bg-white border-gray-300"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* PREVIEW CANVAS */}
        <div className="bg-gray-200 p-6 rounded-lg">
          <div
            className="bg-white border rounded-xl shadow-lg mx-auto overflow-auto transition-all"
            style={{ width }}
          >
            {/* Inner padding so layout doesn’t touch edges */}
            <div className="p-4 min-h-[500px]">
              {layoutComponent}
            </div>
          </div>
        </div>

        {/* CODE SECTION */}
        <div className="mt-6">
          <ComponentDemo
            preview={layoutComponent}
            code={code}
            heading={`${title} Code`}
          />
        </div>
      </main>
    </div>
  );
}

"use client";
import React, { ReactNode, useState } from "react";
import ComponentDemo from "@/components/ComponentDemo";

interface LayoutPreviewProps {
  title: string;
  layoutComponent: ReactNode;
  code: string;
}

export default function LayoutPreview({ title, layoutComponent, code }: LayoutPreviewProps) {
  const [width, setWidth] = useState(1024); // default width
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleDeviceChange = (device: "desktop" | "tablet" | "mobile") => {
    setDevice(device);
    switch (device) {
      case "desktop":
        setWidth(1024);
        break;
      case "tablet":
        setWidth(768);
        break;
      case "mobile":
        setWidth(375);
        break;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <nav className="space-y-2">
          <span className="block p-2 rounded hover:bg-gray-800">Link 1</span>
          <span className="block p-2 rounded hover:bg-gray-800">Link 2</span>
        </nav>
      </aside>

      <main className="flex-1 p-4">
        {/* Device Switcher */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {["desktop", "tablet", "mobile"].map((d) => (
            <button
              key={d}
              className={`px-3 py-1 rounded border ${
                device === d ? "bg-primary text-white border-primary" : "bg-gray-100 border-gray-300"
              }`}
              onClick={() => handleDeviceChange(d as "desktop" | "tablet" | "mobile")}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        {/* Resizable Preview */}
        <div className="border rounded shadow p-4 mb-4 bg-gray-50 overflow-auto"
             style={{ width: `${width}px`, transition: "width 0.3s" }}>
          {layoutComponent}
        </div>

        {/* ComponentDemo for code snippet */}
        <ComponentDemo preview={layoutComponent} code={code} heading={`${title} Code`} />
      </main>
    </div>
  );
}

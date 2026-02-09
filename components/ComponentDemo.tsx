"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function ComponentDemo({
  heading,
  preview,
  code,
}: {
  preview: React.ReactNode;
  code: string;
  heading?: string;
}) {
  const [mode, setMode] = useState<"preview" | "code">("preview");

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      {heading && <h2 className="text-xl text-gray-800 font-semibold mb-4">{heading}</h2>}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("preview")}
          className={`px-3 py-1 text-sm rounded ${mode === "preview"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
            }`}
        >
          Preview
        </button>

        <button
          onClick={() => setMode("code")}
          className={`px-3 py-1 text-sm rounded ${mode === "code"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
            }`}
        >
          Code
        </button>
      </div>

      {mode === "preview" ? (
        <div className="p-4 border rounded bg-gray-50">
          {preview}
        </div>
      ) : (
        <pre className="gap-4 p-4 bg-black text-black text-sm overflow-x-auto rounded">
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="ml-auto px-5 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 mb-4"
          >
            Copy
          </button>
          <CodeBlock code={code} />
          {/* <code>{code}</code> */}
        </pre>
      )}
    </div>
  );
}

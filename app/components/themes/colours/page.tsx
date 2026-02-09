"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ComponentDemo from "@/components/ComponentDemo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const defaultColors = {
    primary: "#2563eb",
    secondary: "#9333ea",
    success: "#16a34a",
    warning: "#f59e0b",
    danger: "#dc2626",
    neutral: "#374151",
};

export default function ColorsPage() {
    const [colors, setColors] = useState(defaultColors);

    const handleChange = (key: string, value: string) => {
        setColors((prev) => ({ ...prev, [key]: value }));
    };

    const colorEntries = Object.entries(colors);

    // Create inline style to override CSS variables
    const cssVars = Object.fromEntries(
        colorEntries.map(([key, value]) => [`--color-${key}`, value]),
    );

    return (
        <PageLayout
            title="Interactive Color Palette"
            subtitle="Change colors here in real-time (only for this page)"
        >
            {/* ---------------- Intro section ---------------- */}
            <div className="mb-8 space-y-4">
                <p>
                    All colors in this UI library are defined as{" "}
                    <strong>CSS variables</strong> in <code>globals.css</code> under{" "}
                    <code>:root</code>. For example:
                </p>

                <SyntaxHighlighter
                    language="css"
                    style={oneDark}
                    wrapLongLines
                    showLineNumbers={true}
                    customStyle={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                    }}
                >
                    {`/* globals.css */
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-secondary: #9333ea;
  --color-secondary-hover: #7e22ce;
  --color-success: #16a34a;
  --color-success-hover: #15803d;
  /* ... other colors */
}

/* Tailwind helper classes */
.bg-primary { background-color: var(--color-primary); }
.text-primary { color: var(--color-primary); }
.hover\\:bg-primary:hover { background-color: var(--color-primary-hover); }
`}
                </SyntaxHighlighter>
                <p>
                    You can now use these helpers directly in your components for
                    backgrounds, text, or borders:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <code>bg-primary</code> → background
                    </li>
                    <li>
                        <code>text-primary</code> → text color
                    </li>
                    <li>
                        <code>hover:bg-primary-hover</code> → hover background
                    </li>
                    <li>
                        <code>border-primary</code> → border color
                    </li>
                </ul>

                <p>
                    This keeps your UI library consistent and makes it easy to change the
                    theme later — just update the CSS variables.
                </p>
            </div>
            {/* ---------------- Controls ---------------- */}
            <div className="mb-8 space-y-4">
                <p>Use the color pickers below to adjust colors</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {colorEntries.map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                            <label className="w-24 font-semibold">{key}</label>
                            <input
                                type="color"
                                value={value}
                                onChange={(e) => handleChange(key, e.target.value)}
                                className="w-12 h-8 border rounded"
                            />
                            <span className="ml-2 text-sm">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------------- Colors grid ---------------- */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                style={cssVars} // override CSS variables for this page
            >
                {colorEntries.map(([key]) => {
                    const code = `<div className="bg-${key} text-white p-2 rounded hover:bg-${key}-hover">
  ${key} BG
</div>

<p className="text-${key} font-semibold">
  ${key} Text
</p>

<div className="w-12 h-12 rounded-full bg-${key} border border-neutral"></div>`;

                    const preview = (
                        <div className="space-y-2">
                            <div
                                className={`w-12 h-12 rounded-full border border-neutral bg-${key}`}
                            />
                            <div className={`text-${key} font-semibold`}>{key} Text</div>
                            <div
                                className={`p-2 text-white rounded bg-${key} hover:bg-${key}-hover`}
                            >
                                {key} BG
                            </div>
                        </div>
                    );

                    return <ComponentDemo key={key} preview={preview} code={code} />;
                })}
            </div>
        </PageLayout>
    );
}

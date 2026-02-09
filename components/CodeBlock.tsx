"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code }: { code: string }) {
  return (
 <SyntaxHighlighter
  language="tsx"
  style={oneDark}
  wrapLongLines
  showLineNumbers={true}
  customStyle={{
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  }}
>
  {code}
</SyntaxHighlighter>

   );
}

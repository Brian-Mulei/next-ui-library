"use client";

import LayoutPreview from "../LayoutPreview";

export default function DashboardLayoutPage() {
  const dashboardComponent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 border rounded shadow bg-white">Analytics Card 1</div>
      <div className="p-4 border rounded shadow bg-white">Analytics Card 2</div>
      <div className="p-4 border rounded shadow bg-white">Analytics Card 3</div>
      <div className="p-4 border rounded shadow bg-white">Analytics Card 4</div>
    </div>
  );

  const codeString = `
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="p-4 border rounded shadow bg-white">Analytics Card 1</div>
  <div className="p-4 border rounded shadow bg-white">Analytics Card 2</div>
  <div className="p-4 border rounded shadow bg-white">Analytics Card 3</div>
  <div className="p-4 border rounded shadow bg-white">Analytics Card 4</div>
</div>
`;

  return <LayoutPreview title="Dashboard Page" layoutComponent={dashboardComponent} code={codeString} />;
}

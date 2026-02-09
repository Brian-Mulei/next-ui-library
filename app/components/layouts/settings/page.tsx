"use client";

import LayoutPreview from "../LayoutPreview";

export default function SettingsLayoutPage() {
  const settingsComponent = (
    <div className="max-w-xl mx-auto p-6 border rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Settings</h2>
      <div className="flex items-center justify-between">
        <span>Notifications</span>
        <input type="checkbox" className="h-5 w-5" />
      </div>
      <div className="flex items-center justify-between">
        <span>Dark Mode</span>
        <input type="checkbox" className="h-5 w-5" />
      </div>
      <div className="flex items-center justify-between">
        <span>Language</span>
        <select className="border p-1 rounded">
          <option>English</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );

  const codeString = `
<div className="max-w-xl mx-auto p-6 border rounded shadow space-y-4">
  <h2 className="text-xl font-bold">Settings</h2>
  <div className="flex items-center justify-between">
    <span>Notifications</span>
    <input type="checkbox" className="h-5 w-5" />
  </div>
  <div className="flex items-center justify-between">
    <span>Dark Mode</span>
    <input type="checkbox" className="h-5 w-5" />
  </div>
  <div className="flex items-center justify-between">
    <span>Language</span>
    <select className="border p-1 rounded">
      <option>English</option>
      <option>French</option>
    </select>
  </div>
</div>
`;

  return <LayoutPreview title="Settings Page" layoutComponent={settingsComponent} code={codeString} />;
}

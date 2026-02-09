import LayoutPreview from "../LayoutPreview";

export default function ProfileLayoutPage() {
  const profileComponent = (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4" />
        <h2 className="text-xl font-bold mb-1">Jane Doe</h2>
        <p className="text-neutral mb-4">jane.doe@example.com</p>
        <button className="px-4 py-2 bg-primary text-white rounded">Edit Profile</button>
      </div>
    </div>
  );

  const codeString = `<div className="max-w-md mx-auto p-6 border rounded shadow"> ... </div>`;

  return <LayoutPreview title="Profile Page" layoutComponent={profileComponent} code={codeString} />;
}

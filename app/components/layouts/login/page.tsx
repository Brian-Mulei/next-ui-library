"use client";

import LayoutPreview from "../LayoutPreview";

export default function LoginLayoutPage() {
  const loginComponent = (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <input className="w-full p-2 border rounded mb-2" placeholder="Email" />
      <input className="w-full p-2 border rounded mb-4" placeholder="Password" type="password" />
      <button className="w-full p-2 bg-primary text-white rounded">Sign In</button>
    </div>
  );

  const codeString = `
<div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow">
  <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
  <input className="w-full p-2 border rounded mb-2" placeholder="Email" />
  <input className="w-full p-2 border rounded mb-4" placeholder="Password" type="password" />
  <button className="w-full p-2 bg-primary text-white rounded">Sign In</button>
</div>
`;

  return <LayoutPreview title="Login Page" layoutComponent={loginComponent} code={codeString} />;
}

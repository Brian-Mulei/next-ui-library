"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";

const layouts = [
  { name: "Profile", href: "/components/layouts/profile" },
  { name: "Dashboard", href: "/components/layouts/dashboard" },
  { name: "Login", href: "/components/layouts/login" },
  { name: "Settings", href: "/components/layouts/settings" },
];

export default function LayoutsPage() {
  return (
    <PageLayout title="Layouts" subtitle="Click to preview responsive layouts">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {layouts.map((layout) => (
          <Link
            key={layout.name}
            href={layout.href}
            target="_blank" // open in new tab
            className="p-4 border rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="font-semibold mb-2">{layout.name}</h3>
            <p className="text-sm text-neutral">Click to preview</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}

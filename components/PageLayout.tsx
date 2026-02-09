export default function PageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div>{children}</div>
    </div>
  );
}

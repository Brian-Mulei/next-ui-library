import "./globals.css";
import Sidebar from "../components/SIdeBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "qCommerz - Client Management",
  description: "qCommerz client management dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-(family-name:--font-outfit)`}>
        <Sidebar />
        <div className="min-h-screen lg:pl-68">
          <Header />
          <main className="px-4 py-6 md:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

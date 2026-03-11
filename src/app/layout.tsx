import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/sidebar";
import { Header } from "@/components/layout/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Salaf Dashboard",
  description: "A modern dashboard for managing clients, projects, and tasks efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-(family-name:--font-outfit)`}>
        <SidebarProvider>
          <Header />
          <main className="min-w-0 flex-1 px-4 py-6 md:px-8">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}

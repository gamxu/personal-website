import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "gamxu.me", // You can use metadata for title
  description: "Collection of Wuttipat experiences and projects",
  icons: {
    icon: "/head-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-black-bg font-inter text-white-primary min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

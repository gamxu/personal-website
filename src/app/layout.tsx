import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "react-hot-toast";

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
          <Toaster />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

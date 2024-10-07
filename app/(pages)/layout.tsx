import Navbar from "@components/Navbar";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShareLink",
  description:
    "Built by Aba Wandjovu Nicaisse. HNG-11 Internship: Stage 5 task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

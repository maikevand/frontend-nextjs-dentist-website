import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "De Tandenborstel",
  description: "Uw tandartspraktijk in de buurt",
  icons: "/logo.svg",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl">
      <body>
      <Navigation />
      {children}
      </body>
    </html>
  );
}

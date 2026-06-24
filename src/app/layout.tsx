import { Footer } from "@/components/layout/Footer";

import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nexus",
    default: "Nexus",
  },
  description: "Nexus",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body className="grid min-h-screen w-full grid-rows-[auto_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

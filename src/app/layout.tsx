import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/boxicons.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../app/styles/style.css";
import "../app/styles/responsive.css";
import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GoTop from "@/components/Shared/GoTop";
import AosAnimation from "@/components/Layouts/AosAnimation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hepro - React Nextjs IT & Software SaaS Startup Template",
  description: "React Nextjs IT & Software SaaS Startup Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <GoTop />

        <AosAnimation />
      </body>
    </html>
  );
}

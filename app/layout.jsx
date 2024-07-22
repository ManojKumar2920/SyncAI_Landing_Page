import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sync AI",
  description:
    "AI powered Communications layer on top of Cardano with built-in SocialFi!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

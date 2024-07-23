import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer/Footer";
import Scroll from "@/components/Smooth/Scroll";

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
        <Scroll>
          <NavBar />
          {children}
          <Footer />
        </Scroll>
      </body>
    </html>
  );
}

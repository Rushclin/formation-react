import HeaderTop from "@/layout/components/HeaderTop";
import { Inter } from "next/font/google";
import HeaderMain from "@/layout/components/HeaderMain";
import Navbar from "@/layout/components/Navbar";

import MobNavbar from "@/layout/components/MobNavbar";
import Footer from "@/layout/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={inter.className}>
      <HeaderTop />
      <HeaderMain />
      <Navbar />
      <MobNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

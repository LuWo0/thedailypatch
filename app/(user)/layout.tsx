import Header from "@/components/Header";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Daily Patch - Home",
  description: "Daily patch notes",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Navbar />

      {children}
      <Footer />
    </div>
  );
}

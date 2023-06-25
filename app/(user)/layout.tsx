import Header from "@/components/Header";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchInput from "@/components/SearchInput";

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
      <div className="flex py-4 justify-around">
        <SearchInput />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

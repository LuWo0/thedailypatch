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
      <div className="flex py-4 mb-10 justify-around sticky top-0 bg-[#121212] w-full z-20 rounded-md">
        <Header />
        <SearchInput />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

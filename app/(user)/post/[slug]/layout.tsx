import Header from "@/components/Header";
import "../../../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Daily Patch - Patch",
  description: "Daily patch notes",
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
    </>
  );
}

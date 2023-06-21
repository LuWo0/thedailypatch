import Header from "@/components/Header";
import "../globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className=" max-w-8xl">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

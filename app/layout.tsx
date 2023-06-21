import Navbar from "@/components/Navbar";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "The Daily Patch",
  description: "Daily patch notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" mx-auto ">
        {children}
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import "../../../globals.css";

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
    <html lang="en">
      <body className=" max-w-5xl mx-auto">
        {children}
      </body>
    </html>
  );
}
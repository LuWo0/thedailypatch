import Header from "../../components/Header";
import "../globals.css";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

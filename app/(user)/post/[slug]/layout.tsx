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
    <>
      {children}
    </>
  );
}

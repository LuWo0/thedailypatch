import Link from "next/link";

export function Logo() {
  return (
    <Link className="font-mono text-left" href="/">
      <p className="text-2xl">The Daily Patch</p>
    </Link>
  );
}

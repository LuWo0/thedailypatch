import Link from "next/link";

export function Logo() {
  return (
    <Link className="font-mono text-left" href="/">
      <p className="text-2xl hidden md:block">The.Daily.Patch</p>
      <p className="text-2xl md:hidden ">T.D.P</p>
    </Link>
  );
}

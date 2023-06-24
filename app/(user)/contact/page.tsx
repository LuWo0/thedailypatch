import Link from "next/link";

export default function Contact() {
  return (
    <section className="font-mono py-8">
      <header className="text-5xl text-center md:text-left">Contact</header>
      <article className="py-8 flex flex-col justify-between items-center md:flex-row">
        <p className="ml-4">
          If you&apos;d have any questions, please get in touch.
        </p>
        <div className="flex flex-col gap-2 mt-10">
            <label htmlFor="email" className="text-center">email</label>
            <Link href="mailto: luwo0@thedailypatch.net">luwo0@thedailypatch.net</Link>
        </div>
        <div className="flex flex-col gap-2 mt-10">
            <label htmlFor="socials">socials</label>
            <Link href="https://twitter.com/luwo0">twitter</Link>
            <Link href="https://gtihub.com/luwo0">github</Link>
        </div>
      </article>
    </section>
  );
}

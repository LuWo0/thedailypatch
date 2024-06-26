import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params }: Props,
    ): Promise<Metadata> {
    return {
      title: "About | The Daily Patch",
      description:"About Page"
    }
}

export default function About() {
  return (
    <section className="font-mono py-8">
      <header className="text-5xl text-center md:text-left">About</header>
      <article className="py-8 text-center md:text-left">
        <p className="ml-4">
          This is a scuffed news site tailored for those of us who like to
          receive our news in the form of patch notes! This is a personal
          project developed by <strong>Luis Woo</strong> on his spare time.{" "}
          <br /> <br />
          All news is meant to be taken seriously; the style in which it is
          written, is not!
        </p>
        <h1 className="py-8">:3</h1>
      </article>
      <aside className="text-center md:text-left">
        <h1>Accolades:</h1>
        <p className="ml-4 py-8">Nothing to see here yet! Come back later!</p>
      </aside>
    </section>
  );
}

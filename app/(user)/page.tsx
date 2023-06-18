import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PatchList from "@/components/PatchList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  const posts = await client.fetch(query);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PatchList posts={posts} />
    </main>
  );
}

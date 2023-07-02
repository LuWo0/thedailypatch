import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PatchList from "@/components/PatchList";
import { REVALIDATION_TIME } from "@/util/Revalidate";

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
    <main className="px-24 p-6 text-sm md:text-md">
      <PatchList posts={posts} />
    </main>
  );
}

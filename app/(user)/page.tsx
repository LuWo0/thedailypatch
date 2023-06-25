import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PatchList from "@/components/PatchList";
import { REVALIDATION_TIME } from "@/util/Revalidate";
import Search from "@/components/Search";

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
    <main className="px-24 p-6 text-xl ">
      <PatchList posts={posts} />
    </main>
  );
}

"use client";

import ClientSideRoute from "@/components/ClientSideRoute";
import PatchList from "@/components/PatchList";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { useSearchParams } from "next/navigation";

type Props = {
    posts: Post[];
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function SearchPage() {
  const search = useSearchParams();
  const searchQuery = search?.get("q");
  
  const posts = await client.fetch(query);
  const filteredPosts = posts.filter((post: Post) => (
    post.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  ));
  return (
    <div>
      <h1 className="font-mono text-4xl">Search Results</h1>
      {filteredPosts.map((post : Post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className="">
            <div className="flex items-center justify-center h-full w-full mt-10 bg-[#3D3D3D] hover:bg-[#b9971f] cursor-pointer transition-all hover:scale-105 duration-150">
              <p className="font-bold text-center font-mono">{post.title}</p>
            </div>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}

import { client } from "@/sanity/lib/client";

import Image from "next/image";
import TodaysPatch from "./TodaysPatch";

type Props = {
  posts: Post[];
};

export default function PatchList({ posts }: Props) {
  return (
    <div>
      <TodaysPatch posts={posts} />
      
      <hr className="border-[#3d3d3d] mb-10" />
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 justify-center items-center">
        {posts.map((post) => (
          <div key={post._id} className="w-[400px] h-[300px] border-none  ">
            <div className="group flex flex-col relative items-center justify-center w-full h-full bg-[#3D3D3D] hover:bg-[#b9971f] cursor-pointer transition-all hover:scale-105 duration-150">
              <p className="font-bold font-mono">{post.title}</p>
              <p className="opacity-30 text-sm absolute bottom-0 right-0 p-2 font-mono group-hover:opacity-0">
                {new Date(post._createdAt)
                  .toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import TodaysPatch from "./TodaysPatch";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

export default function PatchList({ posts }: Props) {
  return (
    <div>

      <TodaysPatch posts={posts} />

      <hr className="border-[#3d3d3d] mb-10" />
      <div className="">
        <h1 className="font-mono text-4xl">Archive</h1>
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="">
              <div className="flex items-center justify-center h-full w-full mt-10 bg-[#3D3D3D] hover:bg-[#b9971f] cursor-pointer transition-all hover:scale-105 duration-150">
                <p className="font-bold font-mono">{post.title}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

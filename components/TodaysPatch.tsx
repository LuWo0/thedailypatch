import moment from "moment";
import { RichTextComponents } from "./RichTextComponents";
import PortableText from "react-portable-text";

type Props = {
  posts: Post[];
};

export default function TodaysPatch({ posts }: Props) {
  const todaysPatch = posts.at(0);
  if (todaysPatch == null) {
    return <p>Today&apos;s Patch Notes Not Out Yet :3 </p>;
  }
  const time = new Date(todaysPatch._createdAt);

  return (
    <section className="font-mono max-w-prose">
      <h1 className="text-4xl text-center">
        {todaysPatch?.title.toUpperCase()} NOTES
      </h1>
      <div className=" flex justify-center gap-8 py-4 whitespace-nowrap">
        <p className="opacity-30">{moment(time).fromNow().toUpperCase()}</p>
        <div className="flex gap-2">
          <p className="opacity-30">AUTHOR: </p>
          <p className="opacity-80 text-[#b9971f]">
            {todaysPatch.author.name.toUpperCase()}
          </p>
        </div>
        <article>{todaysPatch.description}</article>
      </div>
      <div className="">
        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          serializers={RichTextComponents}
          content={todaysPatch.body}
        />
      </div>
    </section>
  );
}

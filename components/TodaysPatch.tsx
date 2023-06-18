import moment from "moment";



// TODO: FIGURE OUT HOW TO ADD BODY TO PAGE.



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
    <section className="block w-full h-full font-mono -skew-x-12">
      <h1 className="font-mono text-7xl text-center">
        {todaysPatch?.title.toUpperCase()} NOTES
      </h1>
      <div className=" flex gap-8 justify-around text-sm py-4 ">
        <p className="opacity-30">{moment(time).fromNow().toUpperCase()}</p>
        <div className="flex gap-2" >
          <p className="opacity-30">AUTHOR: </p>
          <p className="opacity-80 text-[#b9971f]">{todaysPatch.author.name.toUpperCase()}</p>
        </div>
        <article>
            {todaysPatch.description}
        </article>
      </div>
    </section>
  );
}

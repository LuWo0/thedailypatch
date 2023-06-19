import { RichTextComponents } from "@/components/RichTextComponents";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { REVALIDATION_TIME } from "@/util/Revalidate";
import ArrowUturnLeftIcon from "@heroicons/react/24/solid/ArrowUturnLeftIcon";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import PortableText from "react-portable-text";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = REVALIDATION_TIME; 

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]{
        slug
    }
    `;
  const slugs: Post[] = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug, }));
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
        *[_type == "post" && slug.current == $slug][0]{
            ...,
            author->,
            categories[]->
        }
    `;

  const post = await client.fetch(query, { slug });

  return (
    <article className=" mx-12 pl-5 py-5 my-5">
      <Link href="/">
      <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
          Return Home
      </Link>
      <section>
        <div className="relative">
          <h1 className="text-4xl font-mono text-center ">{post.title}</h1>
        </div>
        <div className="flex items-center space-x-2 ">
          <Image
            className="rounded-full"
            src={urlForImage(post.author.image).url()}
            alt={post.author.name}
            height={40}
            width={40}
          />
          <div className=" w-64">
            <h3 className="text-lg font-mono">{post.author.name}</h3>
            {/* <div>{TODO: AUTHOR BIO}</div> */}
          </div>
        </div>
      </section>
      <PortableText serializers={RichTextComponents} content={post.body} />
    </article>
  );
}

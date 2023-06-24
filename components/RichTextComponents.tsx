import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { getImageDimensions } from "@sanity/asset-utils";

export const RichTextComponents = {
  types: {
    image: ({ node }: any) => {
      const { width, height } = getImageDimensions(node);
      const imageUrl = urlForImage(node).width(width).height(height).url();
      return (
        <div className="relative max-w-xl5 h-96 m-10 mx-auto">
          <Image
            className=" aspect-w-2 aspect-h-1"
            src={imageUrl}
            alt={node.alt || " "}
            loading="lazy"
            fill
          />
        </div>
      );
    },
  },
  ul: ({ children }: any) => (
    <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
  ),
  li: ({ children }: any) => <li className="font-mono">{children}</li>,
  ol: ({ children }: any) => <ol className="mt-lg list-decimal">{children}</ol>,
  h1: ({ children }: any) => (
    <h1 className="text-5xl py-10 font-mono border">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h1 className="text-4xl py-10 font-mono">{children}</h1>
  ),
  h3: ({ children }: any) => (
    <h1 className="text-3xl py-10 font-mono">{children}</h1>
  ),
  h4: ({ children }: any) => (
    <h1 className="text-2xl py-10 font-mono">{children}</h1>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-[#b9971f] border-l-4 pl-5 py-5 my-5 font-mono w-auto">
      {children}
    </blockquote>
  ),
  marks: {
    link: ({ children, value }: any) => {
      return(
      <Link
        href={value?.href}
        className="underline decoration-[#b9971f] hover:decoration-[#b9971f]"
      >
        {children}
      </Link>);
    },
  },
};

import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNav(props: any) {
  return (
    <>
      <nav className="flex items-center justify-between p-5">
        <Link className="text-[#4a96fb] flex items-center" href="/">
         <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
          Go To Website
        </Link>
      </nav>
      {props.renderDefault(props)}
    </>
  );
}

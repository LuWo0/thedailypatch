"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  title: Element;
  idx: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Props[]>([]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  const getHeadings = () => {
    const sectionTitles = document.querySelectorAll(".header2");
    const newArr = [];
    let idx = 0;
    for (const title of sectionTitles.values()) {
      newArr.push({ title, idx });
      title.id = idx.toString();
      idx++;
    }
    return newArr;
  };

  useEffect(() => {
    setHeadings(getHeadings());
  }, []);

  return (
    <div className=" hidden opacity-70 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4 lg:fixed lg:left-3/4 lg:top-1/3">
      <h3>Table of Contents</h3>
      {headings?.map(({ title, idx }) => (
        <Link href={`#${idx}`} key={title.id} onClick={handleScroll}>
          {title.textContent}
        </Link>
      ))}
    </div>
  );
}

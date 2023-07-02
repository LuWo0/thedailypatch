"use client";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function MobileScrollTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  return (
    <div className="sm:hidden">
      {showButton && (
        <div className={`scrollToTop`}>
          <button className="border-2 border-[#202020] fixed bottom-5 right-7 z-50 cursor-pointer p-4" onClick={handleScrollToTop}>
            <ArrowUpIcon width={30} height={30} />
          </button>
        </div>
      )}
    </div>
  );
}

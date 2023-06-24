"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="h-24">
      <div className="flex justify-end items-center h-full w-full px-4 2xl:px-16 ">
        <ul className="hidden sm:flex ">
          <Link href="/">
            <li className="ml-10 font-mono hover:border-b text-xl">Home</li>
          </Link>
          <Link href="/about">
            <li className="ml-10 font-mono hover:border-b text-xl">About</li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 font-mono hover:border-b text-xl">Contact</li>
          </Link>
        </ul>
        <div
          onClick={handleNavClick}
          className="sm:hidden cursor-pointer pl-24"
        >
          <Bars4Icon className="fixed top-3 right-5 h-8 w-8 text-[#b9971f] " />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#b9971f] p-10 ease-in duration-200 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-200"
        }
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-black"
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-black"
                >
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-black"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNavClick} className="cursor-pointer self-start">
            <XMarkIcon className="h-8 w-8 text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <div
      className={
        window.innerWidth > 768
          ? "flex justify-between bg-[#2F2878] p-4"
          : "flex justify-between bg-[#2F2878] p-4"
      }
    >
      <Image className="mx-4" src={"/g1.png"} alt="" width={150} height={1} />
      <ul className="sm:flex gap-8 text-white text-lg items-center px-16">
        <li>
          <Link href={"/"}>
            <span
              className={`relative hover:text-gray-300 transition duration-200`}
            >
              Home
              <span
                className={`absolute h-[1px] bg-white bottom-0 left-0 transition-all duration-200 ${
                  path === "/" ? "w-full" : "w-0"
                }`}
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/meta"}>
            <span
              className={`relative hover:text-gray-300 transition duration-200 `}
            >
              Meta
              <span
                className={`absolute h-[1px] bg-white bottom-0 left-0 transition-all duration-200 ${
                  path === "/meta" ? "w-full" : "w-0"
                }`}
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/nao"}>
            <span
              className={`relative hover:text-gray-300 transition duration-200`}
            >
              Nao
              <span
                className={`absolute h-[1px] bg-white bottom-0 left-0 transition-all duration-200 ${
                  path === "/nao" ? "w-full" : "w-0"
                }`}
              />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

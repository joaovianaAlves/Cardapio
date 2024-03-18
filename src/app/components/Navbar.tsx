"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="flex justify-between bg-[#2F2878] p-4">
      <Image className="mx-4" src={"/g1.png"} alt="" width={150} height={1} />
      <ul className="hidden sm:flex gap-8 text-white text-lg items-center px-16">
        <li>
          <Link href={"/meta"}>
            <span
              className={`relative hover:text-gray-300 transition duration-200 ${
                path === "/meta" ? "underline" : ""
              }`}
            >
              Meta
              <span
                className={`absolute h-0 bg-white bottom-0 left-0 transition-all duration-200 ${
                  path === "/meta" ? "w-full" : "w-0"
                }`}
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/nao"}>
            <span
              className={`relative hover:text-gray-300 transition duration-200 ${
                path === "/nao" ? "underline" : ""
              }`}
            >
              Nao
              <span
                className={`absolute h-0 bg-white bottom-0 left-0 transition-all duration-200 ${
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

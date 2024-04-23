"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <div className={"flex justify-end bg-[#2F2878] p-4"}>
      <ul className="flex gap-8  text-white text-lg items-center px-4">
        {/* <li>
          <Link href={"/"}>
            <span
              className={`relative hover:text-gray-300 transition duration-200 `}
            >
              Meta
              <span
                className={`absolute h-[1px] bg-white bottom-0 left-0 transition-all duration-200 ${
                  path === "/" ? "w-full" : "w-0"
                }`}
              />
            </span>
          </Link>
        </li> */}
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

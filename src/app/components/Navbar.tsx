"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/meta", label: "Meta" },
    { href: "/nao", label: "Nao" },
  ];

  return (
    <div className={"flex justify-end bg-[#2F2878] p-4"}>
      <ul className="flex gap-8 text-white text-xl font-normal items-center px-4 pr-20">
        {navItems.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}>
              <span
                className={`relative hover:text-gray-200 transition duration-200`}
              >
                {label}
                <span
                  className={`absolute h-[1px] bg-white bottom-0 left-0 transition-all duration-200 ${
                    path === `${href}` ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

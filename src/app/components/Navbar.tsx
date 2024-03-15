import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-purple-950 flex justify-between">
      <Image
        className="p-4 mx-4"
        src={"/g1.png"}
        alt=""
        width={150}
        height={1}
      />
      <ul className="flex gap-16 p-4 mx-4 text-white font-bold text-lg items-center">
        <Link href={"/meta"}>Meta</Link>
        <Link href={"/nao"}>Nao</Link>
      </ul>
    </div>
  );
}

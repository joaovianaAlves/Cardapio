import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cardInfoNao } from "../utils/cardInfoNao";

export default function CardMeta() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[80%] mx-auto gap-4 mb-10">
      {cardInfoNao.map((item) => (
        <Link key={item.title} href={`/nao/${item.id}`} className="group">
          <div className="p-4 h-full border min-h-96 border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            <Image
              className="rounded-2xl w-full object-cover"
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
            />

            <div className="mt-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>

            <div className="mt-8 text-center opacity-0 group-hover:opacity-100 group-hover:translate-x-16 transition duration-700">
              <span className="text-lg font-medium">Explore →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

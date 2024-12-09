import React from "react";
import { cardInfo } from "../utils/cardInfoMeta";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  let title = (await params).title;

  const filteredItem = cardInfo.find((cardItem) => cardItem.title === title);

  console.log(filteredItem);

  if (!filteredItem) {
    return <p>No card found with the title: {(await params).title}</p>;
  }

  return (
    <div className="flex flex-col items-center w-2/3 mx-auto space-y-6 my-10">
      {/* Image Section */}
      <div>
        <Image
          src={filteredItem.image}
          alt={filteredItem.title}
          width={600}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Area */}
      <div className="text-center">
        <h2 className="font-semibold text-4xl capitalize py-2 text-gray-800">
          {filteredItem.title}
        </h2>
        <p className="font-light w-2/3 py-2 text-gray-600 mx-auto">
          {filteredItem.description}
        </p>
        {filteredItem.link && (
          <Link
            href={filteredItem.link}
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

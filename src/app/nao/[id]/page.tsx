import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cardInfoNao } from "@/app/utils/cardInfoNao";

// Refatorar o Card Item e criar endpoint /nao/id e /meta/idzl

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let id = (await params).id;

  const filteredItem = cardInfoNao.find((cardItem) => cardItem.id === id);

  console.log(filteredItem);

  if (!filteredItem) {
    return <p>No card found with the title: {id}</p>;
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
      </div>
    </div>
  );
}

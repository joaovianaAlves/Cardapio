import React from "react";
import Image from "next/image";

interface CardInfo {
  image: string;
  title: string;
  description: string;
}

interface CardItemProps {
  cardInfo: CardInfo[];
}

export default function CardItem({ cardInfo }: CardItemProps) {
  return cardInfo.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col p-4 items-center border border-gray-300 rounded-2xl shadow-lg w-[90%] mx-auto my-4 bg-white hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
      >
        <div>
          <Image
            className="rounded-2xl"
            src={item.image}
            alt=""
            width={200}
            height={150}
          />
        </div>
        <div className="flex flex-col px-5 pt-3">
          <h1 className="text-start font-bold text-lg">{item.title}</h1>
          <p className="text-start text-sm justify">{item.description}</p>
        </div>
      </div>
    );
  });
}

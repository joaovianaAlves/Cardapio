import React from "react";
import Image from "next/image";

const cardInfo = [
  {
    image: "/NaoImage.jfif",
    title: "Nao",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ab laborum illum eligendi ut perferendis ",
  },
  {
    image: "/NaoImage.jfif",
    title: "Nao",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ab laborum illum eligendi ut perferendis ",
  },
  {
    image: "/NaoImage.jfif",
    title: "Nao",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ab laborum illum eligendi ut perferendis ",
  },
  {
    image: "/NaoImage.jfif",
    title: "Nao",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ab laborum illum eligendi ut perferendis",
  },
];

const cardItem = () => {
  return cardInfo.map((item, index) => {
    return (
      <div
        key={index}
        className="flex p-4 items-center border border-gray-300 rounded-2xl shadow-lg w-[90%] mx-auto my-4 bg-white hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
      >
        <div className="flex-shrink-0">
          <Image
            className="rounded-2xl"
            src={item.image}
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="flex flex-col px-6">
          <h1 className="text-start font-bold text-lg">{item.title}</h1>
          <p className="text-start text-sm">{item.description}</p>
        </div>
      </div>
    );
  });
};

export default function CardNao() {
  return <div className="grid grid-cols-3 w-[80%] mx-auto ">{cardItem()}</div>;
}

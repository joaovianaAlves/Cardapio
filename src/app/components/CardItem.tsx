import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMeta } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

interface CardInfo {
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface CardItemProps {
  cardInfo: CardInfo[];
}

export default function CardItem({ cardInfo }: CardItemProps) {
  return cardInfo.map((item, index) => {
    return (
      <div key={index} className="m-2 min-w-[200px]">
        <div className="flex flex-col p-3 items-center justify-between border border-gray-300 rounded-2xl shadow-lg w-[90%] mx-auto my-4 bg-white hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer h-full">
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
          <div>
            {item.link ? (
              <div className="flex justify-center items-center">
                <Link
                  href={item.link}
                  className="mx-1 border-2 shadow-lg w-full sm:w-[90%] transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg bg-blue-600 transform hover:scale-105"
                >
                  <span className="text-white font-bold">Explorar</span>
                </Link>
                <Link
                  href={item.link}
                  className="mx-1 border-2 shadow-lg w-full sm:w-[90%] transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg bg-blue-600 transform hover:scale-105"
                >
                  <span className="text-white font-bold">Solicitar</span>
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <Link
                  href={"/nao"}
                  className="mx-1 border-2 shadow-lg w-[90%] transition duration-300 ease-in-out cursor-pointer p-1 px-14 rounded-lg bg-blue-600 transform hover:scale-105"
                >
                  <span className="text-white font-bold">Solicitar</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });
}

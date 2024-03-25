"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

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
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<CardInfo | null>(null);

  const togleModal = (item: CardInfo) => {
    setCurrentItem(item);
    setModal(true);
  };

  const untogleModal = () => {
    setModal(false);
  };
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
                  href={"https://forms.gle/2Xd1ofQMQT9Mw2sQ7"}
                  className="mx-1 border-2 shadow-lg w-full sm:w-[90%] transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg bg-blue-600 transform hover:scale-105"
                >
                  <span className="text-white font-bold">Solicitar</span>
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <Link
                  href={"https://forms.gle/2Xd1ofQMQT9Mw2sQ7"}
                  className="mx-1 border-2 shadow-lg w-[90%] transition duration-300 ease-in-out cursor-pointer p-1 px-12 rounded-lg bg-blue-600 transform hover:scale-105"
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

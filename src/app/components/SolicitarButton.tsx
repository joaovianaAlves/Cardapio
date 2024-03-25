import React from "react";
import Link from "next/link";

export default function SolicitarButton() {
  return (
    <div className="flex justify-center items-center fixed bottom-0 right-0 m-8 animate-float">
      <Link
        target="_blank"
        href={"https://forms.gle/DksJcVV2SKDpTDU7A"}
        className="mx-1 border-2 shadow-lg w-full sm:w-[90%] transition duration-300 ease-in-out cursor-pointer p-4 px-8 lg:p-6 lg:px-12 lg:text-xl  sm:p-2 sm:px-4 rounded-lg bg-blue-600 transform hover:scale-105"
      >
        <span className="text-white font-bold">Solicitar</span>
      </Link>
    </div>
  );
}

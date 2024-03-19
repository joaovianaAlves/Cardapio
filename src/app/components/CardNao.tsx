import React from "react";
import { cardInfo } from "../utils/cardInfoNao";
import CardItem from "./CardItem";
export default function CardNao() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[80%] mx-auto">
      <CardItem cardInfo={cardInfo} />
    </div>
  );
}

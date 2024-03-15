import React from "react";
import CardItem from "./CardItem";
import { cardInfo } from "../utils/cardInfoMeta";

export default function CardMeta() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 w-[80%] mx-auto">
      <CardItem cardInfo={cardInfo} />
    </div>
  );
}

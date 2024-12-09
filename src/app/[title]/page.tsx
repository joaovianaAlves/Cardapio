import React from "react";
import { cardInfo } from "../utils/cardInfoMeta";

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
    <div className="card">
      <img src={filteredItem.image} alt={filteredItem.title} />
      <h2>{filteredItem.title}</h2>
      <p>{filteredItem.description}</p>
      {filteredItem.link && <a href={filteredItem.link}>Learn More</a>}
    </div>
  );
}

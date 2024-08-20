import React from "react";
import animeCards from "../anime_cards.json";

const AnimeCard = () => {
  return (
    <>
      {animeCards.anime_cards.map((card) => (
        <a key={card.id} href={card.url} target="_blank" className="sec-2-a">
          <div className="card">
            <div className="wrapper">
              <img src={card.backgroundImage} className="cover-image" />
            </div>
            <img src={card.logo} className="title" />
            <img src={card.Image} className="character" />
          </div>
        </a>
      ))}
    </>
  );
};

export default AnimeCard;

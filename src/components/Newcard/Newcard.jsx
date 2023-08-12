import React from "react";
import { useState, useEffect } from "react";

const Newcard = () => {
const url = "http://localhost:3000/MarsBot"
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      {card.map((card) => (
        <div key={card.id}>
            <img src={card.img} alt="" />
            <h1>{card.title}</h1>
        </div>
      ))}
    </div>
  )
};

export default Newcard;

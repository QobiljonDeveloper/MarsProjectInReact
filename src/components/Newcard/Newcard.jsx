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
        <div key={card.id} className='relative my-5 rounded-md overflow-hidden'>
            <img src={card.img} className='w-full h-screen max-h-[140px] object-cover' alt="" />
            <h1 className='absolute bottom-0 left-0 w-full px-3 bg-[#00000099] text-white'>{card.title}</h1>
        </div>
      ))}
    </div>
  )
};

export default Newcard;

import React from "react";
import { useEffect, useState } from "react";
const Product = () => {
  const url = "http://localhost:3000/Products";
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="flex flex-col gap-6">
      {card.map((item) => {
        return (
          <div className="flex items-center justify-between ">
            <img src={item.img} alt="" />
            <div className="flex items-start flex-col w-[120px] ">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <div className="Price flex mt-5 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 18.6059C15.6483 18.6059 18.6059 15.6483 18.6059 12C18.6059 8.35162 15.6483 5.39404 12 5.39404C8.35162 5.39404 5.39404 8.35162 5.39404 12C5.39404 15.6483 8.35162 18.6059 12 18.6059Z"
                    fill="#FFD05B"
                  />
                  <path
                    d="M12.0002 17.28C14.9163 17.28 17.2802 14.916 17.2802 12C17.2802 9.08391 14.9163 6.71997 12.0002 6.71997C9.08415 6.71997 6.72021 9.08391 6.72021 12C6.72021 14.916 9.08415 17.28 12.0002 17.28Z"
                    fill="#F9B54C"
                  />
                </svg>
                <p className="font-semibold text-sm text-[#8B8B8B]">{item.price}</p>
              </div>
            </div>
            <div className="astat flex flex-col items-end gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clip-path="url(#clip0_111_142)">
                  <path
                    d="M0 12.195V2.82C0 2.04 0.275 1.375 0.825 0.825C1.375 0.275 2.04 0 2.82 0H9.705L7.815 1.875H2.82C2.56 1.875 2.335 1.97 2.145 2.16C1.955 2.35 1.865 2.57 1.875 2.82V12.195C1.875 12.455 1.965 12.675 2.145 12.855C2.325 13.035 2.55 13.125 2.82 13.125H12.195C12.445 13.125 12.665 13.035 12.855 12.855C13.045 12.675 13.135 12.455 13.125 12.195V7.185L15 5.31V12.195C15 12.975 14.725 13.635 14.175 14.175C13.625 14.715 12.965 14.99 12.195 15H2.82C2.04 15 1.375 14.725 0.825 14.175C0.275 13.625 0 12.965 0 12.195ZM2.82 12.195L3.81 8.52L9.555 2.805L12.24 5.415L6.465 11.175L2.82 12.195ZM10.365 1.995L11.805 0.555C12.165 0.185 12.605 0 13.125 0C13.645 0 14.085 0.185 14.445 0.555C14.805 0.925 14.99 1.365 15 1.875C15.01 2.385 14.825 2.83 14.445 3.21L13.05 4.605L10.365 1.995Z"
                    fill="#E3391B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_111_142">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <small className="font-medium text-[#8B8B8B]">{item.restproduct}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import { useEffect } from "react";
import './Cards.css'
const Cards = () => {
  const url = " http://localhost:3000/MarsBot";
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });

    return () => {
      console.log("cleanup");
    };
  }, [url]);

  return (
    <div className=" flex flex-col gap-4 overflow-y-auto w-full h-[214px] p-1 mt-5 bg-scroll-[white] cursor-pointer">
      {cards.map((card) => {
        return (
          <div className="card w-full h-[57px] border-l-[10px] shadow-lg border-[red] px-2 flex justify-between items-center">
            
            {/* card-time */}
            <div className="time border-r-2 border-solid border-[#D9D9D9] p-2 flex flex-col item-center justify-center">
              
              <h2 className="text-[#17233B] text-[18px] font-[700]">
                {card.nexttime}
              </h2>
              <p className="text-[12px] text-[#7F8AA0] font-[400]">
                {card.nextdate}
              </p>
            </div>
            {/* card location */}
            <div className="location w-[290px]">
              
              <h2 className="text-[#17233B] text-[18px] font-[700]">
                {card.eventName}
              </h2>
              <div className="icon flex items-center gap-2">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  
                  <g clip-path="url(#clip0_48_578)">
                    
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.67218 3.95917C1.67218 6.25052 5.00015 9.99999 5.00015 9.99999C5.00015 9.99999 8.32812 6.25052 8.32812 3.95917C8.32812 1.88863 6.94604 0.417999 5.00015 0.417999C3.05426 0.417999 1.67218 1.88863 1.67218 3.95917Z"
                      stroke="#17233B"
                      stroke-width="0.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.00023 5.17683C4.10343 5.17683 3.37644 4.42104 3.37644 3.48873C3.37644 2.55642 4.10343 1.80063 5.00023 1.80063C5.89703 1.80063 6.62402 2.55642 6.62402 3.48873C6.62402 4.42104 5.89703 5.17683 5.00023 5.17683Z"
                      stroke="#17233B"
                      stroke-width="0.5"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    
                    <clipPath id="clip0_48_578">
                      
                      <rect width="10" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Yunusobod</p>
              </div>
            </div>
            {/* card data */}
            <div className="data flex items-center gap-7">
              
              <h3>27-Iyul 11:00</h3>
              <button>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  
                  <g clip-path="url(#clip0_48_552)">
                    
                    <path
                      d="M0 12.195V2.82C0 2.04 0.275 1.375 0.825 0.825C1.375 0.275 2.04 0 2.82 0H9.705L7.815 1.875H2.82C2.56 1.875 2.335 1.97 2.145 2.16C1.955 2.35 1.865 2.57 1.875 2.82V12.195C1.875 12.455 1.965 12.675 2.145 12.855C2.325 13.035 2.55 13.125 2.82 13.125H12.195C12.445 13.125 12.665 13.035 12.855 12.855C13.045 12.675 13.135 12.455 13.125 12.195V7.185L15 5.31V12.195C15 12.975 14.725 13.635 14.175 14.175C13.625 14.715 12.965 14.99 12.195 15H2.82C2.04 15 1.375 14.725 0.825 14.175C0.275 13.625 0 12.965 0 12.195ZM2.82 12.195L3.81 8.52L9.555 2.805L12.24 5.415L6.465 11.175L2.82 12.195ZM10.365 1.995L11.805 0.555C12.165 0.185 12.605 0 13.125 0C13.645 0 14.085 0.185 14.445 0.555C14.805 0.925 14.99 1.365 15 1.875C15.01 2.385 14.825 2.83 14.445 3.21L13.05 4.605L10.365 1.995Z"
                      fill="#E3391B"
                    />
                  </g>
                  <defs>
                    
                    <clipPath id="clip0_48_552">
                      
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  
                  <path
                    d="M8.93753 2.125C8.20366 2.125 7.57785 2.59377 7.34593 3.24995C7.2424 3.54285 6.92104 3.69638 6.62813 3.59285C6.33523 3.48932 6.18171 3.16795 6.28524 2.87505C6.67106 1.78344 7.71211 1 8.93753 1C10.163 1 11.204 1.78344 11.5899 2.87505C11.6934 3.16795 11.5399 3.48932 11.247 3.59285C10.9541 3.69638 10.6327 3.54285 10.5292 3.24995C10.2973 2.59377 9.67141 2.125 8.93753 2.125Z"
                    fill="#898282"
                  />
                  <path
                    d="M2 4.5625C2 4.25184 2.25184 4 2.5625 4H15.3126C15.6232 4 15.8751 4.25184 15.8751 4.5625C15.8751 4.87316 15.6232 5.125 15.3126 5.125H2.5625C2.25184 5.125 2 4.87316 2 4.5625Z"
                    fill="#898282"
                  />
                  <path
                    d="M4.43627 6.33757C4.41561 6.0276 4.14757 5.79307 3.83761 5.81374C3.52763 5.8344 3.2931 6.10243 3.31377 6.41241L3.66136 11.6262C3.72547 12.5883 3.77727 13.3654 3.89875 13.9752C4.02505 14.6092 4.23986 15.1387 4.68356 15.5538C5.12725 15.9689 5.66992 16.148 6.3109 16.2319C6.92743 16.3125 7.70629 16.3125 8.67049 16.3125H9.32958C10.2938 16.3125 11.0726 16.3125 11.6892 16.2319C12.3301 16.148 12.8728 15.9689 13.3165 15.5538C13.7602 15.1387 13.975 14.6092 14.1013 13.9752C14.2227 13.3654 14.2746 12.5883 14.3387 11.6262L14.6863 6.41241C14.7069 6.10243 14.4724 5.8344 14.1624 5.81374C13.8525 5.79307 13.5844 6.0276 13.5638 6.33757L13.2188 11.5119C13.1514 12.5228 13.1034 13.2262 12.998 13.7554C12.8957 14.2687 12.753 14.5405 12.5479 14.7323C12.3429 14.9241 12.0622 15.0485 11.5432 15.1164C11.0082 15.1864 10.3032 15.1875 9.29006 15.1875H8.71001C7.69691 15.1875 6.99187 15.1864 6.45682 15.1164C5.93782 15.0485 5.6572 14.9241 5.45214 14.7323C5.24708 14.5405 5.10433 14.2687 5.00207 13.7554C4.89664 13.2262 4.84862 12.5228 4.78123 11.5119L4.43627 6.33757Z"
                    fill="#898282"
                  />
                  <path
                    d="M7.06907 7.69027C7.37819 7.65937 7.6538 7.8849 7.68478 8.19405L8.05978 11.944C8.09068 12.2531 7.86515 12.5288 7.556 12.5597C7.2469 12.5906 6.97124 12.3651 6.94033 12.0559L6.56533 8.30595C6.53442 7.99687 6.75995 7.72117 7.06907 7.69027Z"
                    fill="#898282"
                  />
                  <path
                    d="M11.4348 8.30595C11.4657 7.99687 11.2402 7.72117 10.931 7.69027C10.6219 7.65937 10.3462 7.8849 10.3153 8.19405L9.94033 11.944C9.90943 12.2531 10.135 12.5288 10.4441 12.5597C10.7532 12.5906 11.0288 12.3651 11.0598 12.0559L11.4348 8.30595Z"
                    fill="#898282"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

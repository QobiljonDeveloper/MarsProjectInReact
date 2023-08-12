import React from "react";
import Typography from "../others/Typography/Typography";

const ProductCardList = ({title, footer}) => {
  return (
    <div className="w-full max-w-[50%] ">
      <div className="border border-[#A5A9BC] rounded-t-[10px] px-[24px]">
        <div className="product py-[21px]">
          <Typography
            classes={"text-3xl font-medium text-[#17233B] "}
            text={title}
          />
        </div>
        <div>

        </div>
      </div>
      <div className="flex justify-between items-center w-full h-16 max-h-[60px] bg-[#E3391B] py-2 px-5 rounded-b-[10px]">
        <p className="text-white text-xl">{footer}</p>
        <button className="bg-white text-[#17233B] rounded-lg py-1 px-5 font-bold ">
          + Add
        </button>
      </div>
    </div>
  );
};

export default ProductCardList;

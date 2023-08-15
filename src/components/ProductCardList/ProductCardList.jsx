import Typography from "../others/Typography/Typography";

const ProductCardList = ({ title, footer, card }) => {
 

  return (
    <div className="w-full max-w-[50%] max-h-[490px] ">
      <div className="border border-[#A5A9BC] rounded-t-[10px] pl-5 w-full h-full overflow-hidden">
        <div className="product py-[21px]">
          <Typography
            classes={"text-3xl font-medium text-[#17233B]"}
            text={title}
          />
        </div>
        <div className="new-card pr-5 pb-14">
          {card}
        </div>
      </div>
      <div className="flex justify-between items-center max-h-[60px] bg-[#E3391B] py-2 px-5 rounded-b-[10px] w-full h-full">
        <p className="text-white text-xl">{footer}</p>
        <button className="bg-white text-[#17233B] rounded-lg py-1 px-5 font-bold ">
          + Add
        </button>
      </div>
    </div>
  );
};

export default ProductCardList;

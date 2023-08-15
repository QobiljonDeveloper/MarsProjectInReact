import React from "react";
import ProductCardList from "../ProductCardList/ProductCardList";
import Newcard from "../Newcard/Newcard";
import Product from "../Product.card/Product";
import './MainBlock.css'


const MainBlock = () => {
  return (
    <div className="mt-10 flex gap-[5%] max-h-[390px]">
      <ProductCardList
        title={"Products"}
        footer={"Yangi Maxsulot qo’shish"}
        card={<Product />}
      />
      <ProductCardList
        title={"News"}
        footer={"Yangilik qo’shish"}
        card={<Newcard />}
      />
    </div>
  );
};

export default MainBlock;

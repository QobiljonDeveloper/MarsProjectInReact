import React from 'react'
import ProductCardList from '../ProductCardList/ProductCardList'

const MainBlock = () => {
  return (
    <div className='mt-14 flex gap-[5%]'> 
      <ProductCardList title={"Products"} footer={"Yangi Maxsulot qo’shish"} />
      <ProductCardList title={"News"} footer={"Yangilik qo’shish"} />
    </div>
  )
}

export default MainBlock

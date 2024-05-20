import React from 'react'
import { BsCart2 } from "react-icons/bs";

const AddCart = () => {
  return (
    <div className="flex relative lg:ml-[20px]">
    <p
     
      className="btn1  h-7 w-28 lg:h-[30px] lg:w-[120px] xl:rounded-[8px] 2xl:rounded-[10px]  xl:h-[32px] xl:w-[150px] 2xl:h-[40px] 2xl:w-[189px]"
    >
      <span className="text-[10px] xl:text-[12px] font-semibold 2xl:text-[14px] flex justify-center items-center  pt-[7px] pl-3.5 2xl:pt-[10px] 2xl:pl-[22px]">
        ADD TO CART
      </span>
    </p>
    <BsCart2 className="absolute text-[14px] 2xl:text-[21px] font-bold left-[10px] top-[6px] xl:left-[18px] xl:top-[7px] 2xl:left-[27px] 2xl:top-[9px]  text-white" />
   
  </div>
  )
}

export default AddCart

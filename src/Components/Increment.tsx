
import { FiMinus } from "react-icons/fi";
import React, {useState } from 'react'
import { FiPlus } from "react-icons/fi";



const increment = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <div className="h-7 w-20 border-[#000000] rounded-[7px] border-[1px] flex pb-[2px] xl:pl-[5px] lg:h-[30px] lg:w-[85px] xl:h-[32px] xl:w-[90px] 2xl:h-[40px] 2xl:w-[121px] 2xl:rounded-[11px]">
    <div
      className="w-6 flex justify-center items-center interFont font-normal  2xl:w-7"
      onClick={decrementCount}
    >
      <FiMinus className="hover:text-[#099DBD]" />
    </div>
    <div className="w-8 flex justify-center text-[12px] font-semibold xl:text-[13px] 2xl:text-[14px] text-[#293341] items-center  2xl:w-14">
      {count}
    </div>
    <div
      className="w-6 flex justify-center items-center interFont font-normal "
      onClick={incrementCount}
    >
      <FiPlus className="hover:text-[#099DBD] 2xl:w-7 " />
    </div>
  </div>
  )
}

export default increment

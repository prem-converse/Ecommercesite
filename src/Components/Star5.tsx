'use client'
import React, { useState } from 'react'
import { IoStar } from 'react-icons/io5'

const Star5 = () => {
  const [star1, setStar1] = useState(false)
  const [star2, setStar2] = useState(false)
  const [star3, setStar3] = useState(false)
  const [star4, setStar4] = useState(false)
  const [star5, setStar5] = useState(false)

  const handleStar1 = () => {
    setStar1(!star1)
  }
  const handleStar2 = () => {
    setStar2(!star2)
  }
  const handleStar3 = () => {
    setStar3(!star3)
  }
  const handleStar4 = () => {
    setStar4(!star4)
  }
  const handleStar5 = () => {
    setStar5(!star5)
  }

  return (
    <div className='flex pb-1 xl:pb-2 xl:pt-1 2xl:pt-2'>
      <IoStar
        onClick={handleStar1}
        className={`${
          star1 ? 'text-[#FFB800]' : 'text-[#87878726] '
        } text-[12px] mr-1 xl:text-[14px] 2xl:text-[26px] 2xl:mr-2 `}
      />
      <IoStar
        onClick={handleStar2}
        className={`${
          star2 ? 'text-[#FFB800]' : 'text-[#87878726]'
        } text-[12px] mr-1 xl:text-[14px] 2xl:text-[26px] 2xl:mr-2 `}
      />
      <IoStar
        onClick={handleStar3}
        className={`${
          star3 ? 'text-[#FFB800]' : 'text-[#87878726]'
        } text-[12px] mr-1 xl:text-[14px] 2xl:text-[26px] 2xl:mr-2 `}
      />
      <IoStar
        onClick={handleStar4}
        className={`${
          star4 ? 'text-[#FFB800]' : 'text-[#87878726]'
        } text-[12px] mr-1 xl:text-[14px] 2xl:text-[26px] 2xl:mr-2 `}
      />
      <IoStar
        onClick={handleStar5}
        className={`${
          star5 ? 'text-[#FFB800]' : 'text-[#87878726]'
        } text-[12px] mr-1 xl:text-[14px] 2xl:text-[26px] 2xl:mr-2 `}
      />
    </div>
  )
}

export default Star5

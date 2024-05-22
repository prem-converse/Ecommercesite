'use client'
import { IoMdHeart } from 'react-icons/io'
import React, { useState } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoIosShareAlt } from 'react-icons/io'
import { PiShareFatThin } from 'react-icons/pi'
import { MdCompareArrows } from 'react-icons/md'

const Icons3 = () => {
  const [icon1, setIcon1] = useState(false)
  const [icon2, setIcon2] = useState(false)
  const [icon3, setIcon3] = useState(false)
  const handleIcon1 = () => {
    setIcon1(true)
  }
  const handleIconLeave1 = () => {
    setIcon1(false)
  }

  const handleIcon2 = () => {
    setIcon2(true)
  }
  const handleIconLeave2 = () => {
    setIcon2(false)
  }

  const handleIcon3 = () => {
    setIcon3(true)
  }
  const handleIconLeave3 = () => {
    setIcon3(false)
  }

  return (
    <div className='absolute top-[35px] left-[412px] lg:left-[489px] xl:left-[44.7%] 2xl:left-[48%]'>
      <div
        onMouseEnter={handleIcon1}
        onMouseLeave={handleIconLeave1}
        className='bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 icon-container1  '
      >
        <div>
          {' '}
          {icon1 ? (
            <IoMdHeart className=' text-[rgb(9,157,189)]' />
          ) : (
            <IoIosHeartEmpty className=' text-[rgb(9,157,189)] icon' />
          )}{' '}
        </div>

        <p className='text-[rgb(9,157,189)] text-[10px] font-semibold addpara'>
          Add To Wishlist
        </p>
      </div>

      <div
        onMouseEnter={handleIcon2}
        onMouseLeave={handleIconLeave2}
        className='bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 icon-container2 '
      >
        <div>
          {' '}
          {icon2 ? (
            <IoIosShareAlt className='text-[rgb(9,157,189)]' />
          ) : (
            <PiShareFatThin className='text-[rgb(9,157,189)] icon' />
          )}
        </div>

        <p className='text-[rgb(9,157,189)] text-[10px] font-semibold'>Share</p>
      </div>

      <div
        onMouseEnter={handleIcon3}
        onMouseLeave={handleIconLeave3}
        className='bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 icon-container3 '
      >
        <div>
          {' '}
          {icon3 ? (
            <MdCompareArrows className='text-[rgb(9,157,189)] font-semibold icon text-[21px]' />
          ) : (
            <MdCompareArrows className='text-[rgb(9,157,189)] icon' />
          )}
        </div>
        <p className='text-[rgb(9,157,189)] text-[10px] font-semibold'>
          Compare
        </p>
      </div>
    </div>
  )
}

export default Icons3

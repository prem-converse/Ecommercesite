'use client'
import React from 'react'
import Tshirt from './Tshirt'
import Icons3 from './Icons3'

import Size from './Size'
import Increment from './Increment'
import AddCart from './AddCart'
import BasicTabs from './BasicTabs'
import PlusItems from './PlusItems'
import Star from './Star'
import Star5 from './Star5'
import UploadPhoto from './UploadPhoto'
import UploadVideos from './UploadVideos'
import Submit from './Submit'
import Like from './Like'
import Range from './Range'
import AddCart1 from './AddCart1'
import CheckBox from './CheckBox'

import { RiQuestionAnswerLine } from 'react-icons/ri'

const Main = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex h-full w-full '>
        <div className=' h-full w-3/5  lg:h-full lg:w-[53%] xl:w-[50%] 2xl:w-[52%] 2xl:h-full  xl:h-full   '>
          <Tshirt />
          <Icons3 />
        </div>

        <div className=' h-full w-2/5 lg:w-[47%] lg:h-full xl:h-full xl:w-[50%]  2xl:w-[48%] 2xl:h-full pt-3 pl-1 lg:pl-3 2xl:pt-[22px]  lg:pt-5 xl:pl-2 2xl:pl-[24px]'>
          <Size />

          <div className='flex w-[210px]  xl:w-[250px] 2xl:w-[330px]   justify-between 2xl:pb-[10px]  '>
            <Increment />
            <AddCart />
          </div>
        </div>
      </div>

      <div className='borderPage2  rounded-2xl h-[65%] w-[97%] lg:w-[97%]  mt-[20px] ml-[8px] xl:w-[86%] xl:ml-[90px] xl:h-[67%] 2xl:ml-[80px] 2xl:w-[91.3%] 2xl:h-[77%] '>
        <BasicTabs />
      </div>
      <div className='mt-6 h-full w-[95%] xl:w-[85%] xl:ml-[85px] ml-[20px] 2xl:mt-[53px]  '>
        <div className='flex justify-between w-[30%] lg:w-[25%]  pb-2 ml-3   xl:w-[21%] 2xl:w-[17%]'>
          <h2 className=' interFont font-semibold text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] xl:pb-2 2xl:pl-1.5 2xl:pb-5 text-[#293341] '>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <RiQuestionAnswerLine className='text-[#099DBD] xl:text-[18px] xl:mt-1' />
        </div>
        <PlusItems />
      </div>

      <div className='flex ml-[20px] h-full  w-[95%] lg:mt-[20px]  xl:pl-16  '>
        <Range />

        <div className='w-1/2  h-full mt-3 ml-12 lg:ml-20 2xl:ml-16   '>
          <Star5 />

          <div className='flex justify-around pb-4  '>
            <UploadPhoto />
            <UploadVideos />
          </div>
          <Submit />
        </div>
      </div>

      <Like />

      <AddCart1 />
      <CheckBox />
    </div>
  )
}

export default Main

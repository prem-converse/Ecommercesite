'use client'
import React from 'react'

const CheckBox = () => {
  return (
    <div className='pt-3 xl:pl-7 '>
      <div className='flex pb-2'>
        <input type='checkbox' className='text-[#293341] checkInput' />
        <p className=' interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pl-3 2xl:pr-1.5 text-[#293341]'>
          This item : Regular Fit T-Shirt
        </p>
        <p className=' interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pl-2'>
          ₹ 649{' '}
          <span className='text-[#29334199] pl-1'>
            <del>₹ 1999</del>
          </span>
        </p>
      </div>
      <div className='flex pb-2'>
        <input type='checkbox' />
        <p className=' interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pl-3 2xl:pr-1.5 text-[#293341]'>
          Regular Fit Sweatshorts{' '}
        </p>
        <p className=' interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pl-2'>
          ₹ 599{' '}
          <span className='text-[#29334199] pl-1'>
            <del>₹ 799</del>
          </span>
        </p>
      </div>
      <div className='flex  pb-2'>
        <input type='checkbox' />
        <p className=' interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]  pl-3 2xl:pr-1.5 text-[#293341]'>
          Braided Belt{' '}
        </p>
        <p className=' interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pl-2'>
          ₹ 999{' '}
          <span className='text-[#29334199] pl-1'>
            <del>₹ 1299</del>
          </span>
        </p>
      </div>
    </div>
  )
}

export default CheckBox

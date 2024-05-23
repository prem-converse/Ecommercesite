'use client'
import React from 'react'
import * as Slider from '@radix-ui/react-slider'
import Image from 'next/image'
import { IoStarSharp } from 'react-icons/io5'
import { IoMdStar } from 'react-icons/io'
// import Star from '../Components/Star'

const Range = () => {
  return (
    <div className='w-1/2 b mt-[15%] xl:mt-[49px] 2xl:mt-[103px]'>
      <div className='flex justify-between w-40  lg:w-[179px]  xl:w-[195px] 2xl:w-[206px] '>
        <h2 className='interFont font-semibold text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 2xl:pb-5 text-[#293341] pb-2'>
          CUSTOMERS FEEDBACK
        </h2>
        <Image
          src='/assets/stars.png'
          alt='stars'
          height={1000}
          width={1000}
          className='h-4 w-4 xl:h-5 xl:w-5 '
        />
      </div>

      <div className='flex justify-between  xl:w-[525px] 2xl:w-[870px] '>
        <div className='h-24 w-28 bg-[#F9FAFB] lg:h-28 lg:w-32 xl:h-36 xl:w-36 2xl:h-[231px] 2xl:w-[299px]  rounded-[5px] 2xl:rounded-[8px] flex flex-col items-center justify-center'>
          <h1 className='  interFont font-medium text-[21px] lg:text-[24px] xl:text-[26px] 2xl:text-[60px] text-[#099DBD] '>
            4.8
          </h1>
          <span className='flex '>
            <IoMdStar  className='text-[#FFB800] 2xl:text-[21px] ' />
            <IoMdStar className='text-[#FFB800] 2xl:text-[21px]' />
            <IoMdStar className='text-[#FFB800] 2xl:text-[21px]' />
            <IoMdStar className='text-[#FFB800] 2xl:text-[21px]' />
            <IoMdStar className='text-[#FFB800] 2xl:text-[21px]' />
          </span>
          <h3 className='interFont font-normal text-[11px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-2 2xl:pt-3.5'>
            Product Rating
          </h3>
        </div>

        <div className='h-24 w-56 lg:h-28 lg:w-64 xl:h-36 xl:w-80 2xl:h-[231px] 2xl:w-[543px] mr-5 lg:pt-2 rounded-[5px] 2xl:rounded-[8px]  flex justify-around ml-3 xl:ml-1  bg-[#F9FAFB]'>
          <div>
            <form className='2xl:ml-5'>
              <Slider.Root
                className='SliderRoot xl:w-[100px] xl:h-[25px] 2xl:w-[345px] 2xl:h-[42px] 2xl:font-semibold'
                defaultValue={[70]}
                max={100}
                step={1}
              >
                <Slider.Track className='SliderTrack'>
                  <Slider.Range className='SliderRange' />
                </Slider.Track>
                <Slider.Thumb className='SliderThumb' aria-label='Volume' />
              </Slider.Root>
            </form>

            <form className='2xl:ml-5'>
              <Slider.Root
                className='SliderRoot xl:w-[100px] xl:h-[25px] 2xl:w-[345px] 2xl:h-[42px]'
                defaultValue={[50]}
                max={100}
                step={1}
              >
                <Slider.Track className='SliderTrack '>
                  <Slider.Range className='SliderRange' />
                </Slider.Track>
                <Slider.Thumb className='SliderThumb' aria-label='Volume' />
              </Slider.Root>
            </form>

            <form className='2xl:ml-5'>
              <Slider.Root
                className='SliderRoot xl:w-[100px] xl:h-[25px] 2xl:w-[345px] 2xl:h-[42px]'
                defaultValue={[30]}
                max={100}
                step={1}
              >
                <Slider.Track className='SliderTrack'>
                  <Slider.Range className='SliderRange' />
                </Slider.Track>
                <Slider.Thumb className='SliderThumb' aria-label='Volume' />
              </Slider.Root>
            </form>

            <form className='2xl:ml-5'>
              <Slider.Root
                className='SliderRoot xl:w-[100px] xl:h-[25px] 2xl:w-[345px] 2xl:h-[42px]'
                defaultValue={[20]}
                max={100}
                step={1}
              >
                <Slider.Track className='SliderTrack'>
                  <Slider.Range className='SliderRange' />
                </Slider.Track>
                <Slider.Thumb className='SliderThumb' aria-label='Volume' />
              </Slider.Root>
            </form>

            <form className='2xl:ml-5'>
              <Slider.Root
                className='SliderRoot xl:w-[100px] xl:h-[25px] 2xl:w-[345px] 2xl:h-[42px]'
                defaultValue={[10]}
                max={100}
                step={1}
              >
                <Slider.Track className='SliderTrack'>
                  <Slider.Range className='SliderRange' />
                </Slider.Track>
                <Slider.Thumb className='SliderThumb' aria-label='Volume' />
              </Slider.Root>
            </form>

            

{/* <div className='bg-gray-300 h-1 w-15  rounded-[10px]'>   // alternate for slider range,manual
              <div className='bg-black h-full  rounded-[10px] '></div>
            </div>
            <div className='bg-gray-300 h-1 w-15  rounded-[10px]'>
              <div className='bg-black h-full  rounded-[10px] '></div>
            </div>
            <div className='bg-gray-300 h-1 w-15  rounded-[10px]'>
              <div className='bg-black h-full  rounded-[10px] '></div>
            </div>
            <div className='bg-gray-300 h-1 w-15  rounded-[10px]'>
              <div className='bg-black h-full  rounded-[10px] '></div>
            </div> */}
            

            </div>
         

          {/* star ratings */}
          <div>
            {/* <div className='reviews'>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: starWidth }}>
        </div>
      </div>
    </div> */}

            {/* <div className="reviews">
    <div className="stars-outer">
      <div className="stars-inner" style={{ width: starWidth }}></div>
    </div>
  </div> */}
            {/* const starPercentageRounded = `${50}%`;
document.querySelector(`.reviews .stars-inner`).style.width = starPercentageRounded;  */}
          </div>

          {/* percentage */}

          {/* <Star/> */}

          <div>
            <p className='interFont font-normal text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] pb-[2px] xl:pb-[5px] 2xl:pb-[20px]'>
              70%
            </p>
            <p className='interFont font-normal text-[11px] lg:text-[12px] pb-[2px] xl:text-[13px] 2xl:text-[16px] xl:pb-[5px] 2xl:pb-[20px]'>
              15%
            </p>
            <p className='interFont font-normal text-[11px] lg:text-[12px] pb-[2px] xl:text-[13px] 2xl:text-[16px] xl:pb-[5px] 2xl:pb-[20px]'>
              10%
            </p>
            <p className='interFont font-normal text-[11px] lg:text-[12px] pb-[2px] xl:text-[13px] 2xl:text-[16px] xl:pb-[5px] 2xl:pb-[20px]'>
              3%
            </p>
            <p className='interFont font-normal text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] '>
              2%
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className='interFont font-semibold text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] pt-4 lg:pt-5 pb-2 lg:pb-3 xl:pb-5 2xl:pt-8 2xl:pb-6'>
          CUSTOMERS PHOTOS & VIDEOS
        </h2>
        <div className='flex justify-between w-56  lg:w-[300px] xl:w-[350px] 2xl:w-[495px] '>
          <div className='h-14 w-12 lg:h-16 lg:w-14  xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'>
            <Image
              src='/assets/image 37.png'
              height={1000}
              width={1000}
              alt='customer1'
              className='h-14 w-12 lg:h-16 lg:w-14 xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'
            />
          </div>
          <div className='h-14 w-12 lg:h-16 lg:w-14  xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'>
            <Image
              src='/assets/image 38.png'
              height={1000}
              width={1000}
              alt='customer1'
              className='h-14 w-12 lg:h-16 lg:w-14 xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'
            />
          </div>
          <div className='h-14 w-12 lg:h-16 lg:w-14  xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'>
            <Image
              src='/assets/image 39.png'
              height={1000}
              width={1000}
              alt='customer1'
              className='h-14 w-12 lg:h-16 lg:w-14 xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'
            />
          </div>
          <div className='h-14 w-12 lg:h-16 lg:w-14  xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'>
            <Image
              src='/assets/image 40.png'
              height={1000}
              width={1000}
              alt='customer1'
              className='h-14 w-12 lg:h-16 lg:w-14 xl:h-20 xl:w-20 2xl:h-[107px] 2xl:w-[107px]'
            />
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Range

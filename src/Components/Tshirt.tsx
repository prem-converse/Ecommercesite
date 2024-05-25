'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaShop } from 'react-icons/fa6'

const Tshirt = () => {
  const [hoveredImage, setHoveredImage] = useState('/assets/4.png')

  const handleHover = (imageSrc: any) => {
    setHoveredImage(imageSrc)
  }
  const handleMouseLeave = () => {
    setHoveredImage('/assets/4.png')
  }
  return (
    <div className='  border rounded-2xl h-[649px] w-[445px] lg:h-[678px] lg:w-[530px] xl:h-[734px] 2xl:h-[926px] 2xl:w-[91.5%]   xl:w-[610px] ml-[10px] mt-[10px] xl:ml-[90px] 2xl:ml-[84px]  '>
      <div className='  h-[455px] w-[445px]  lg:h-[500px] lg:w-[530px] xl:h-[515px] xl:w-[595px] 2xl:h-[76%] 2xl:w-[98.5%]  flex  pl-[6px] xl:pl-3 pt-3 2xl:ml-1  2xl:pt-4   '>
        <div className='h-[455px] w-[100px] lg:h-[480px] lg:w-[125px] xl:h-[98%] xl:w-[24%] xl:pr-[5px] 2xl:h-[100%] 2xl:w-[20%]  2xl:mr-[4px]  '>
          <div className='w-[100px] h-[112px] lg:h-[120px] lg:w-[125px] xl:h-[125px] xl:w-[140px] 2xl:h-[170px] 2xl:w-[170px] imageFocus1 2xl:mb-[7px]   '>
            <Image
              src='/assets/1.png'
              height={1000}
              width={1000}
              className='h-[112px] w-[100px] lg:h-[120px] lg:w-[125px] xl:h-[125px] xl:w-[140px] 2xl:h-[165px] 2xl:w-[170px] '
              onMouseEnter={() => handleHover('/assets/1.png')}
              onMouseLeave={handleMouseLeave}
              alt='Image1'
            />
          </div>
          <div className='w-[100px] h-[112px] lg:h-[120px] xl:h-[125px] xl:w-[140px] lg:w-[120px] imageFocus2 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[9px] '>
            <Image
              src='/assets/2.png'
              height={1000}
              width={1000}
              className='h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[125px] xl:w-[140px] pb-[3px] 2xl:h-[161px] 2xl:w-[167px] '
              onMouseEnter={() => handleHover('/assets/2.png')}
              onMouseLeave={handleMouseLeave}
              alt='Image2'
            />
          </div>
          <div className='w-[100px] h-[112px] lg:h-[120px] lg:w-[120px] xl:h-[125px] xl:w-[140px] imageFocus3 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[9px] '>
            <Image
              src='/assets/3.png'
              height={1000}
              width={1000}
              className='h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] pb-[3px] xl:h-[125px] xl:w-[140px]  2xl:h-[161px] 2xl:w-[167px]'
              onMouseEnter={() => handleHover('/assets/3.png')}
              onMouseLeave={handleMouseLeave}
              alt='Image3'
            />
          </div>
          <div className='w-[100px] h-[112px] lg:h-[120px] lg:w-[120px] imageFocus4 xl:h-[125px] xl:w-[140px] 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[6px] '>
            <Image
              src='/assets/4.png'
              height={1000}
              width={1000}
              className='h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] pb-[3px] xl:h-[125px] xl:w-[140px] 2xl:h-[161px] 2xl:w-[167px] '
              onMouseEnter={() => handleHover('/assets/4.png')}
              onMouseLeave={handleMouseLeave}
              alt='Image4'
            />
          </div>
        </div>

        <div className=' h-[446px] w-[330px] lg:h-[480px] lg:w-[387px]   xl:h-[500px]  xl:w-[440px] 2xl:h-[100%]  2xl:w-[84.7%] ml-[4px] xl:ml-[8px] relative 2xl:ml-[1px] 2xl:mr-[5px] 2xl:mb-[10px] '>
          <Image
            src={hoveredImage}
            height={1000}
            width={1000}
            className='h-[446px] w-[345px] lg:h-[477px] lg:w-[387px] xl:h-[498px] xl:w-[440px]  2xl:h-[100%] 2xl:w-[99.5%] '
            alt='Image4'
            
          />
        </div>
      </div>

      <div>
        <Image
          src='/assets/new.png'
          height={1000}
          width={1000}
          alt='new'
          className='h-3 w-9 2xl:h-[17px] 2xl:w-[68px] absolute top-7 left-32 lg:left-[152px] lg:top-[30px] xl:left-[17.8%] xl:top-[3.6%] 2xl:left-[15.1%] 2xl:top-[35.9px] '
        />
      </div>

      <div className='bg-[rgb(247,252,253)] h-[100px] w-[350px] lg:h-[105px] lg:w-[370px] xl:h-[110px] xl:w-[430px] 2xl:h-[121px] 2xl:w-[611px] ml-[6px] mt-[29px] rounded-[5px] relative lg:mt-[12px] xl:mt-[16px] xl:ml-[12px] 2xl:mt-[25px]'>
        <FaShop className='text-[rgb(9,157,189)] text-[17px] 2xl:text-[23px] absolute left-[19px] top-[30px] lg:top-[35px] 2xl:left-[50px]' />

        <div className='flex  pt-[30px] lg:pt-[35px]'>
          <p className='font-medium text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] interFont pl-[39px] 2xl:pl-[83px] pr-[55px] ml-[5px]'>
            {' '}
            Online shop Activewear Limited,
            <br />
            Mumbai , Maharashtra.{' '}
          </p>

          <p className='btn h-[25px] w-[90px] xl:h-[28px] xl:w-[110px] xl:rounded-[8px] 2xl:h-[40px] hover:text-white 2xl:w-[187px] '>
            <span className='text-[10px] font-semibold text-[#293341] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] hover:text-white  flex justify-center items-center pt-[4px] xl:pt-[5px]  2xl:pt-[9px] '>
              VISIT STORE
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tshirt

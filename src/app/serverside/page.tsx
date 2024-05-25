import AddCart from '@/Components/AddCart'
import BasicTabs from '@/Components/BasicTabs'
import CheckBox from '@/Components/CheckBox'
import Icons3 from '@/Components/Icons3'
import Increment from '@/Components/Increment'
import Like from '@/Components/Like'
import PlusItems from '@/Components/PlusItems'
import Range from '@/Components/Range'
import Size from '@/Components/Size'
import Star5 from '@/Components/Star5'
import Submit from '@/Components/Submit'
import Tshirt from '@/Components/Tshirt'
import UploadPhoto from '@/Components/UploadPhoto'
import UploadVideos from '@/Components/UploadVideos'
import Image from 'next/image'
import React from 'react'
import { AiOutlineTruck } from 'react-icons/ai'
import { FaShop } from 'react-icons/fa6'
import { FiPlus } from 'react-icons/fi'
import { IoMdStar } from 'react-icons/io'
import { LuDot } from 'react-icons/lu'
import { MdOutlineLocalOffer, MdOutlineTextsms } from 'react-icons/md'
import { RiQuestionAnswerLine } from 'react-icons/ri'

const Page = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex h-full w-full '>
        <div className=' h-full w-3/5  lg:h-full lg:w-[53%] xl:w-[50%] 2xl:w-[52%] 2xl:h-full  xl:h-full   '>
          <Tshirt />

          <Icons3 />

         </div>

        <div className=' h-full w-2/5 lg:w-[47%] lg:h-full xl:h-full xl:w-[50%]  2xl:w-[48%] 2xl:h-full pt-3 pl-1 lg:pl-3 2xl:pt-[22px]  lg:pt-5 xl:pl-2 2xl:pl-[24px]'>
          <h2 className='font-bold text-[13px] interFont lg:text-[14px] xl:text-[16px] 2xl:text-[18px] '>
            Allen Solly
          </h2>
          <div className='flex pt-0 lg:pt-[6px] 2xl:pt-[7px] '>
            <h2 className='font-normal text-[15px] lg:text-[17px] interFont pr-[36px] xl:text-[20px] 2xl:text-[24px] '>
              Regular Fit T-Shirt
            </h2>
            <div className='border-l-[1px] h-[16px] xl:mt-[4px] border-gray-400  '>
              <p className='text-[#099DBD] font-medium text-[12px] lg:text-[13px] xl:text-[15px]  pl-[12px] 2xl:text-[16px]  stock'>
                In Stock
              </p>
            </div>
          </div>
          <p className='text-[11px] text-[#29334199] font-normal interFont pt-0 lg:text-[12px] lg:leading-[22px] 2xl:leading-[25px] xl:text-[13px] 2xl:text-[14px] 2xl:w-[86.5%] 2xl:pt-[4px]  '>
            Enjoy comfort and style in Allen Sollys Regular Fit Tee. Crafted for
            everyday wear with quality materials, it effortlessly blends style
            and comfort
          </p>

          <div className='flex leading-[22px] gap-x-[10px] pt-1.5 pb-3 xl:pt-[15px] xl:pb-[15px] 2xl:pt-[26px] 2xl:pb-[25px] '>
            <p className='font-semibold interFont text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[28px] 2xl:pr-[2px]'>
              ₹ 649{' '}
            </p>
            <p className=' interFont font-normal text-[12px] xl:text-[14px] 2xl:text-[17px] text-[#29334199] 2xl:pr-[2px]   crossBorder 2xl:pt-[2px]'>
              <del>₹ 1999</del>
            </p>
            <p className=' interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] text-[#099DBD] xl:pr-[10px] 2xl:pl-[4px] 2xl:pr-[19px] 2xl:pt-[2px] '>
              67% off
            </p>
            <div className='flex borderStar rounded-[4px] h-[22px] w-[50px] pl-[7px] 2xl:h-[27px] 2xl:w-[65px] xl:rounded-[7px] 2xl:pl-[8px] 2xl:pt-[2.5px]  2xl:rounded-[8px] 2xl:mr-[4px] '>
              <p className='interFont font-medium text-[13px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 2xl:pr-[3px] '>
                {' '}
                4.5
              </p>
              <IoMdStar className='text-[rgb(255,184,0)] text-[19px] pt-[3px] 2xl:h-[30px] 2xl:pb-[8px]   ' />
            </div>
            <div className='   reviewBorder rounded-[6px] h-[22px] w-[82px] lg:h-[23px] lg:w-[87px] lg:pt-[2px] xl:h-[24px] xl:w-[98px]  pl-1  2xl:rounded-[10px] mr-[2px] flex 2xl:h-[27px] 2xl:w-[112px] 2xl:pt-[4px]'>
              <MdOutlineTextsms className='text-[#099DBD] flex items-center xl:text-[17px] xl:font-bold font-semibold pt-1 2xl:font-bold  2xl:text-[20px]' />
              <p className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px]   xl:font-semibold text-[#099DBD] flex items-center pb-1  pl-1 2xl:pl-[1px]'>
                58 Reviews
              </p>
            </div>
          </div>

          <h2 className='interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] pb-2 lg:pb-3 2xl:pb-[7px]  '>
            CHOOSE COLOR
          </h2>

          <div className='w-[298px] lg:w-[303px] xl:w-[306px] 2xl:w-[381px]  flex gap-x-1.5 pb-3.5 xl:pb-[21px] 2xl:pb-[30px] 2xl:gap-x-[7.5px]  '>
            <div className=' h-[58px]  w-12 lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'>
              <Image
                src='/assets/5.png'
                height={1000}
                width={1000}
                className=' h-[58px] w-12 lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'
                alt='smallimage1'
              />
            </div>
            <div className=' h-[58px] w-12 lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'>
              <Image
                src='/assets/6.png'
                height={1000}
                width={1000}
                className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'
                alt='smallimage2'
              />
            </div>
            <div className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'>
              <Image
                src='/assets/7.png'
                height={1000}
                width={1000}
                className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'
                alt='smallimage3'
              />
            </div>
            <div className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'>
              <Image
                src='/assets/8.png'
                height={1000}
                width={1000}
                className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'
                alt='smallimage4'
              />
            </div>
            <div className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'>
              <Image
                src='/assets/9.png'
                height={1000}
                width={1000}
                className='w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]'
                alt='smallimage5'
              />
            </div>
          </div>

          <div className='flex  '>
            <h2 className='interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] pb-3 pr-2 2xl:pb-[18px]'>
              SELECT SIZE
            </h2>
            <div className='flex 2xl:pt-[3px]  2xl:w-[120px]    '>
              <LuDot className='text-[#099DBD] 2xl:font-semibold 2xl:text-[29px] 2xl:pb-2 2xl:w-[px] ' />
              <p className='interFont font-medium text-[10px] 2xl:font-semibold  lg:text-[11px] xl:text-[11px] 2xl:text-[12px] text-[#099DBD]'>
                Few pieces left
              </p>
            </div>
          </div>

          <Size />
          <div className='flex w-[210px]  xl:w-[250px] 2xl:w-[330px]   justify-between 2xl:pb-[10px]  '>
            <Increment />
            <AddCart />
          </div>

          <div className='xl:pb-[6px] 2xl:pb-[3px] '>
            <div className='flex w-32 justify-between pt-4 pb-2 lg:pb-3 lg:w-[140px] xl:w-[155px] xl:pt-[20px]  2xl:w-[172px] 2xl:pb-[10px] '>
              <h2 className='interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px]'>
                DELIVERY OPTIONS
              </h2>
              <AiOutlineTruck className='text-[#099DBD] 2xl:text-[21px] ' />
            </div>
            <div className=' h-7 w-32  border-[#4848481A]  rounded-[7px] border-[1px] flex justify-between  items-center lg:h-[30px] lg:w-[134px] xl:h-[32px] xl:w-[149px] 2xl:h-[40px] 2xl:w-[206px]'>
              <p className='interFont font-normal text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] pl-2 2xl:pl-4  text-[#29334199]'>
                Pin Code
              </p>
              <p className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] pr-2  2xl:pr-4  text-[#099DBD]'>
                CHECK
              </p>
            </div>
          </div>

          <div className='pt-3 2xl:pt-[27px]'>
            <div className='flex '>
              <h2 className='interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] text-[#293341] pb-1.5 pr-1 2xl:text-[15px] 2xl:pr-[6px]'>
                OFFERS
              </h2>
              <MdOutlineLocalOffer className='text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[17px] 2xl:ml-[3px] text-[#099DBD] mt-0.5 ' />
            </div>

            <div className='  h-[218px] w-72 offerShadow lg:h-[210px] lg:w-[410px] xl:h-[215px] xl:w-[590px] 2xl:h-[266px] 2xl:w-[796px] 2xl:leading-[30px] border-[#4848481A]  border-dashed border-[0.5px] 2xl:border-[2px]   rounded-[3px] pl-2.5 pt-2 2xl:mt-[2px] 2xl:pl-[27px] 2xl:pt-[10px]'>
              <h3 className='interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pb-1 2xl;pb-[1px] '>
                Bank offers
              </h3>

              <p className='interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] pb-1 text-[#29334199] 2xl:pt-[px] '>
                10% Instant Discount on ICICI Bank Credit Cards and NetBanking{' '}
                <span className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] '>
                  VIEW DETAILS
                </span>
              </p>
              <p className='interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199]  pb-1'>
                5% Cashback on Online shopping Axis Bank Card{' '}
                <span className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] '>
                  VIEW DETAILS
                </span>
              </p>
              <p className='interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199] pb-1 lg:pb-1'>
                12% Instant Discount on HDFC Bank Debit Card EMI{' '}
                <span className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] '>
                  VIEW DETAILS
                </span>
              </p>

              <p className='interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199] pb-1 lg:pb-2 2xl:pb-[6px]'>
                Extra ₹750 off on OneCard Credit Card EMI Transactions on
                products priced ₹50,000 and above{' '}
                <span className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] '>
                  VIEW DETAILS
                </span>
              </p>

              <h3 className='interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px]  2xl:text-[14px] text-[#293341] pb-1 2xl:pb-[3px]'>
                EMI option{' '}
              </h3>
              <p className='interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199]'>
                EMI starting from Rs.19/month{' '}
                <span className='interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] '>
                  VIEW PLAN
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='borderPage2  rounded-2xl h-[65%] w-[97%] lg:w-[97%]  mt-[20px] 2xl:mt-[40px] ml-[8px] xl:w-[86%] xl:ml-[90px] xl:h-[67%] 2xl:ml-[80px] 2xl:w-[91.3%] 2xl:h-[77%] '>
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
          <div className='  h-[50%] w-[97%]  lg:w-[98%] xl:h-[420px] 2xl:h-[634px] 2xl:w-[92.4%] rounded-[5px] xl:rounded-[9px] borderWrite pl-3  2xl:pl-8 '>
            <div className='lg:pl-9'>
              <h3 className='interFont font-semibold text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[20px] pb-2 pt-3 2xl:pt-8 2xl:pb-6'>
                Write a Review
              </h3>
              <p className=' interFont font-normal text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] pb-1'>
                What is it like to Product?{' '}
                <span className='interFont font-normal text-[11px] lg:text-[12px] text-[#DD0707]'>
                  {' '}
                  *
                </span>{' '}
              </p>

          

              <Star5 />
            </div>

            <div>
              <p className='interFont font-normal text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] pb-1 lg:pl-9 2xl:pt-4 2xl:pb-2 '>
                Review Comments
              </p>

              <div className='border-2 h-24 w-64 lg:w-80 xl:w-[450px] 2xl:h-[121px] 2xl:w-[608px] border-[#4848481A] rounded-[8px] lg:ml-9 2xl:mb-4   '></div>
            </div>

            <div className='pt-3 '>
              <p className=' interFont font-normal text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] pb-2 lg:pl-9'>
                Would you share your experience by a Image or Video ?{' '}
              </p>

              <div className='flex justify-around pb-4  '>
                <UploadPhoto />

                <UploadVideos />
              </div>
              <Submit />
            </div>
          </div>
        </div>
      </div>
      <Like />

      <div className='h-[60%] w-[50%]  xl:h-[270px] 2xl:w-[49.4%] 2xl:h-[441px]  rounded-[7px] borderTogether pl-3 pt-2.5 mt-5 ml-3 mb-3 xl:ml-16 2xl:pt-5  2xl:pl-3'>
        <h2 className='interFont font-semibold text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] pb-3 xl:pb-5 2xl:pb-7 2xl:pl-2.5 '>
          FREQUENTLY BOUGHT TOGETHER
        </h2>

        <div className='flex pl-7 2xl:mb-4'>
          <Image
            src='/assets/t1.png'
            height={1000}
            width={1000}
            alt='together1 '
            className='h-16 w-14 xl:h-28 xl:w-24 2xl:h-[212px] 2xl:w-[171px] 2xl:mr-3'
          />
          <FiPlus className='mt-6 xl:mt-9 2xl:text-[21px] 2xl:mt-24' />
          <Image
            src='/assets/t2.png'
            height={1000}
            width={1000}
            alt='together2'
            className='h-16 w-14 xl:h-28 xl:w-24 2xl:h-[212px] 2xl:w-[171px] 2xl:ml-3 2xl:mr-3'
          />
          <FiPlus className='mt-6 xl:mt-9 2xl:text-[21px] 2xl:mt-24' />
          <Image
            src='/assets/t3.png'
            height={1000}
            width={1000}
            alt='together3'
            className='h-16 w-14 xl:h-28 xl:w-24 2xl:h-[212px] 2xl:w-[171px] 2xl:ml-3 2xl:mr-1'
          />
          <div className='xl:pl-6 2xl:pl-2.5 2xl:mt-16'>
            <div className='flex justify-evenly  w-44  2xl:w-60 '>
              <p className='interFont font-medium text-[12px] text-[#293341] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]'>
                Total Price{' '}
              </p>

              <p className='interFont font-semibold text-[14px] lg:text-[15px] xl:text-[13px] 2xl:text-[20px] text-[#293341]'>
                ₹2247{' '}
                <span className='text-[#898989] interFont font-normal text-[11px] lg:text-[11px] xl:text-[11px] 2xl:text-[14px]  '>
                  <del>₹4097</del>{' '}
                </span>
              </p>
            </div>

            <p className='btn1  bg-[#099DBD] h-7 w-28 lg:w-32 ml-4 xl:h-8 xl:w-40 2xl:h-[40px] 2xl:w-[187px] 2xl:rounded-[9px] 2xl:mt-1.5 '>
              <span className='text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] font-semibold  flex justify-center pt-1.5 xl:pt-2 2xl:pt-2.5 '>
                ADD ALL TO CART
              </span>
            </p>
          </div>
        </div>

        <CheckBox />
      </div>
    </div>
  )
}

export default Page

'use client'
import React, { useState } from 'react'
import { FaMinus } from 'react-icons/fa6'
import { AiOutlinePlus } from 'react-icons/ai'

const PlusItems = () => {
  const [content1, setContent1] = useState(false)
  const [content2, setContent2] = useState(false)
  const [content3, setContent3] = useState(false)
  const [content4, setContent4] = useState(false)
  const [content5, setContent5] = useState(false)
  const [content6, setContent6] = useState(false)
  const [content7, setContent7] = useState(false)
  const [content8, setContent8] = useState(false)

  const handleContent1 = () => {
    setContent1(!content1)
  }
  const handleContent2 = () => {
    setContent2(!content2)
  }
  const handleContent3 = () => {
    setContent3(!content3)
  }
  const handleContent4 = () => {
    setContent4(!content4)
  }
  const handleContent5 = () => {
    setContent5(!content5)
  }
  const handleContent6 = () => {
    setContent6(!content6)
  }
  const handleContent7 = () => {
    setContent7(!content7)
  }
  const handleContent8 = () => {
    setContent8(!content8)
  }
  return (
    <div className='flex justify-between '>
    
      <div>
        <div>
          {content1 ? (
            <div className='  border8 2xl:pl-4 h-[80px] w-[350px] lg:h-[110px] lg:w-[400px] xl:h-[110px] xl:w-[500px]  2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px]  xl:pl-2  rounded-[6px] xl:rounded-[9px]  flex items-center justify-between duration-700 mb-2.5 2xl:mb-8 '>
              <div className='   w-[310px]   xl:w-[450px] 2xl:w-[90%] '>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  What is the fabric composition of this regular fit T-shirt?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  Our regular fit T-shirt is crafted from a blend of [fabric
                  composition], ensuring both comfort and durability.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px]  xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px]  flex justify-center items-center bg-[#099DBD] text-white mb-9 lg:mb-14 xl:mb-[47px] 2xl:mb-[77px]  '>
                <FaMinus onClick={handleContent1} className='xl:text-[17px]' />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px]  rounded-[6px] xl:rounded-[9px] flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full  pl-2 2xl:pl-4 items-center interFont font-semibold  text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                What is the fabric composition of this regular fit T-shirt?
              </p>
              <span className=' mr-2 text-[13px] text-black rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center '>
                <AiOutlinePlus onClick={handleContent1} />
              </span>
            </div>
          )}
        </div>

       

        <div>
          {content2 ? (
            <div className='  border8 2xl:pl-4 xl:pl-2 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] xl:h-[130px] xl:w-[500px]  2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8 '>
              <div className='   w-[310px] xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2  2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  Does this T-shirt have any special features for added comfort
                  or durability?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  Our regular fit T-shirt features reinforced stitching for
                  durability and a tagless design for added comfort, ensuring a
                  superior wearing experience.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center bg-[#099DBD] text-white mb-16 lg:mb-14 xl:mb-[67px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent2} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[80px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px]  flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full    pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                Does this T-shirt have any special features for added comfort or
                durability?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px]  xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent2} />
              </span>
            </div>
          )}
        </div>

        <div>
          {content3 ? (
            <div className='  border8 2xl:pl-4 h-[110px] w-[350px] xl:pl-2 lg:h-[110px] lg:w-[400px] xl:h-[110px] xl:w-[500px] 2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8 '>
              <div className='   w-[310px] xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  Can I expect this T-shirt to retain its shape after multiple
                  wears?
                </p>
                <p className=' pl-2   interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  Yes, our regular fit T-shirt is constructed to maintain its
                  shape even after repeated wear, offering long-lasting comfort
                  and style.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center bg-[#099DBD] text-white mb-16 lg:mb-14 xl:mb-[37px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent3} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px]  xl:rounded-[9px] flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px]  xl:w-[450px] 2xl:w-full pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                Can I expect this T-shirt to retain its shape after multiple
                wears?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent3} />
              </span>
            </div>
          )}
        </div>

        <div>
          {content4 ? (
            <div className='  border8 2xl:pl-4 h-[80px] w-[350px] xl:pl-2 lg:h-[110px] lg:w-[400px] xl:h-[110px] xl:w-[500px] 2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8'>
              <div className='   w-[310px] xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  What is the fabric composition of this regular fit T-shirt?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  Our regular fit T-shirt is crafted from a blend of [fabric
                  composition], ensuring both comfort and durability.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center bg-[#099DBD] text-white mb-9 lg:mb-14 xl:mb-[37px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent4} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px]  flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                What is the fabric composition of this regular fit T-shirt?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent4} />
              </span>
            </div>
          )}
        </div>
      </div>

      <div className=' 2xl:ml-11'>
        <div>
          {content5 ? (
            <div className='  border8 2xl:pl-4 h-[100px] w-[350px] xl:pl-2 lg:h-[120px] lg:w-[400px] xl:h-[120px] xl:w-[500px] 2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8 '>
              <div className='   w-[310px] xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  How should I care for this T-shirt to maintain its quality?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  To maintain the quality of your regular fit T-shirt, we
                  recommend washing it in cold water and avoiding bleach. Tumble
                  dry on low heat or air dry for best results.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center bg-[#099DBD] text-white mb-14 lg:mb-14 xl:mb-[57px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent5} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px]  flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                How should I care for this T-shirt to maintain its quality?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent5} />
              </span>
            </div>
          )}
        </div>

        <div>
          {content6 ? (
            <div className='  border8 2xl:pl-4 h-[110px] w-[350px] xl:pl-2 lg:h-[110px] lg:w-[400px] xl:h-[120px] xl:w-[500px] 2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8'>
              <div className='   w-[310px] xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  What body type is best suited for the regular fit of this
                  T-shirt?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  {' '}
                  The regular fit of our T-shirt is designed to flatter a wide
                  range of body types, providing a comfortable and relaxed
                  silhouette
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center bg-[#099DBD] text-white mb-16 lg:mb-14 xl:mb-[47px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent6} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px]  rounded-[6px] xl:rounded-[9px]  flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px]  xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                What body type is best suited for the regular fit of this
                T-shirt?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent6} />
              </span>
            </div>
          )}
        </div>

        <div>
          {content7 ? (
            <div className='  border8 2xl:pl-4  h-[130px] w-[350px] xl:pl-2 lg:h-[130px] lg:w-[400px] xl:h-[130px] xl:w-[500px] 2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8 '>
              <div className='   w-[310px]  xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  Can I wear this T-shirt for workouts or is it more suited for
                  casual wear?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  While our regular fit T-shirts are versatile enough for casual
                  wear, they may not be specifically designed for intense
                  workouts. For exercise-specific clothing, we recommend
                  exploring our activewear collection.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center bg-[#099DBD] text-white mb-20 lg:mb-16 xl:mb-[77px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent7} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2  duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px]  flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px]  xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                Can I wear this T-shirt for workouts or is it more suited for
                casual wear?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent7} />
              </span>
            </div>
          )}
        </div>

        <div>
          {content8 ? (
            <div className='  border8 2xl:pl-4 h-[80px] w-[350px] xl:pl-2 lg:h-[100px] lg:w-[400px] xl:h-[110px] xl:w-[500px] 2xl:h-[159px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px] xl:rounded-[9px] flex items-center justify-between duration-700 mb-2.5 2xl:mb-8 '>
              <div className='   w-[310px] xl:w-[450px] 2xl:w-[90%]'>
                <p className=' pl-2 2xl:pb-4 interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#099DBD] '>
                  Does this T-shirt shrink after washing?
                </p>
                <p className=' pl-2 interFont 2xl:leading-8 font-medium text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                  Our regular fit T-shirt is preshrunk to minimize shrinkage,
                  ensuring a consistent fit wash after wash.
                </p>
              </div>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#099DBD] text-white h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px] flex justify-center items-center mb-8 lg:mb-14 xl:mb-[47px] 2xl:mb-[77px]'>
                <FaMinus onClick={handleContent8} />
              </span>
            </div>
          ) : (
            <div className=' xl:pl-2 duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] xl:h-[70px] xl:w-[500px] 2xl:h-[91px] 2xl:w-[844px] 2xl:rounded-[8px] rounded-[6px]  xl:rounded-[9px] flex justify-between items-center mb-2.5 2xl:mb-8'>
              <p className='  w-[310px] xl:w-[450px] 2xl:w-full pl-2 2xl:pl-4 items-center interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-[#29334199]'>
                Does this T-shirt shrink after washing?
              </p>
              <span className=' mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] xl:h-[24px] xl:w-[24px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mr-6 2xl:rounded-[8px] 2xl:text-[25px]  flex justify-center items-center text-black'>
                <AiOutlinePlus onClick={handleContent8} />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlusItems

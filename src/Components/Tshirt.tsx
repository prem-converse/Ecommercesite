import Image from 'next/image'
import React, { useState } from 'react'


const Tshirt = () => {
    const [hoveredImage, setHoveredImage] = useState("/assets/4.png");

const handleHover = (imageSrc: any) => {
  setHoveredImage(imageSrc);
};
const handleMouseLeave = () => {
  setHoveredImage("/assets/4.png");
};
  return (
    <div>
         <div className="  h-[455px] w-[445px]  lg:h-[500px] lg:w-[530px] xl:h-[515px] xl:w-[595px] 2xl:h-[76%] 2xl:w-[98.5%]  flex  pl-[6px] xl:pl-3 pt-3 2xl:ml-1  2xl:pt-4   ">
              <div className="h-[455px] w-[100px] lg:h-[480px] lg:w-[125px] xl:h-[98%] xl:w-[24%] xl:pr-[5px] 2xl:h-[100%] 2xl:w-[20%]  2xl:mr-[4px]  ">
                <div className="w-[100px] h-[112px] lg:h-[120px] lg:w-[125px] xl:h-[125px] xl:w-[140px] 2xl:h-[170px] 2xl:w-[170px] imageFocus1 2xl:mb-[7px]   ">
                  <Image
                    src="/assets/1.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[125px] xl:h-[125px] xl:w-[140px] 2xl:h-[165px] 2xl:w-[170px] "
                    onMouseEnter={() => handleHover("/assets/1.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image1"
                  />
                </div>
                <div className="w-[100px] h-[112px] lg:h-[120px] xl:h-[125px] xl:w-[140px] lg:w-[120px] imageFocus2 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[9px] ">
                  <Image
                    src="/assets/2.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[125px] xl:w-[140px] pb-[3px] 2xl:h-[161px] 2xl:w-[167px] "
                    onMouseEnter={() => handleHover("/assets/2.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image2"
                  />
                </div>
                <div className="w-[100px] h-[112px] lg:h-[120px] lg:w-[120px] xl:h-[125px] xl:w-[140px] imageFocus3 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[9px] ">
                  <Image
                    src="/assets/3.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] pb-[3px] xl:h-[125px] xl:w-[140px]  2xl:h-[161px] 2xl:w-[167px]"
                    onMouseEnter={() => handleHover("/assets/3.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image3"
                  />
                </div>
                <div className="w-[100px] h-[112px] lg:h-[120px] lg:w-[120px] imageFocus4 xl:h-[125px] xl:w-[140px] 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[6px] ">
                  <Image
                    src="/assets/4.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] pb-[3px] xl:h-[125px] xl:w-[140px] 2xl:h-[161px] 2xl:w-[167px] "
                    onMouseEnter={() => handleHover("/assets/4.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image4"
                  />
                </div>
              </div>

              <div className=" h-[446px] w-[330px] lg:h-[480px] lg:w-[387px]   xl:h-[500px]  xl:w-[440px] 2xl:h-[100%]  2xl:w-[84.7%] ml-[4px] xl:ml-[8px] relative 2xl:ml-[1px] 2xl:mr-[5px] 2xl:mb-[10px] ">
                <Image
                  src={hoveredImage}
                  height={1000}
                  width={1000}
                  className="h-[446px] w-[345px] lg:h-[477px] lg:w-[387px] xl:h-[498px] xl:w-[440px]  2xl:h-[100%] 2xl:w-[99.5%] "
                  alt="Image4"
                  // <IoIosHeartEmpty />
                />
              </div>
            </div>
      
    </div>
  )
}

export default Tshirt

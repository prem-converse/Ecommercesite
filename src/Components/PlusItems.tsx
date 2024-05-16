import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

const PlusItems = () => {
    const[content1,setContent1]=useState(false);
  const[content2,setContent2]=useState(false);
  const[content3,setContent3]=useState(false);
  const[content4,setContent4]=useState(false);
  const[content5,setContent5]=useState(false);
  const[content6,setContent6]=useState(false);
  const[content7,setContent7]=useState(false);
  const[content8,setContent8]=useState(false);


  const handleContent1=()=>{
    setContent1(!content1)
  }
  const handleContent2=()=>{
    setContent2(!content2)
  }
  const handleContent3=()=>{
    setContent3(!content3)
  }
  const handleContent4=()=>{
    setContent4(!content4)
  }
  const handleContent5=()=>{
    setContent5(!content5)
  }
  const handleContent6=()=>{
    setContent6(!content6)
  }
  const handleContent7=()=>{
    setContent7(!content7)
  }
  const handleContent8=()=>{
    setContent8(!content8)
  }
  return (
    <div className="flex justify-between " >
    {/* common div */}
    <div  >
      <div onClick={handleContent1}>
      {content1 ? (<div className="  border8 h-[80px] w-[350px] lg:h-[110px] lg:w-[400px]   rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">What is the fabric composition of this regular fit T-shirt?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt is crafted from a blend of [fabric composition], ensuring both comfort and durability.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-9 "><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px]  rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px] pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">What is the fabric composition of this regular fit T-shirt?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    
    {/* alternative div for plus icon */}
    
    <div onClick={handleContent2}>
    {content2 ? (<div className="  border8 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Does this T-shirt have any special features for added comfort or durability?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt features reinforced stitching for durability and a tagless design for added comfort, ensuring a superior wearing experience.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-16"><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Does this T-shirt have any special features for added comfort or durability?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    
    
    
    <div onClick={handleContent3}>
    {content3 ? (<div className="  border8 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Can I expect this T-shirt to retain its shape after multiple wears?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Yes, our regular fit T-shirt is constructed to maintain its shape even after repeated wear, offering long-lasting comfort and style.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px] h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-16"><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Can I expect this T-shirt to retain its shape after multiple wears?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    <div onClick={handleContent4}>
    {content4 ? (<div className="  border8 h-[80px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">What is the fabric composition of this regular fit T-shirt?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt is crafted from a blend of [fabric composition], ensuring both comfort and durability.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-9"><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">What is the fabric composition of this regular fit T-shirt?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    </div>
    
    <div className="">
    
    <div onClick={handleContent5}>
    {content5 ? (<div className="  border8 h-[100px] w-[350px] lg:h-[120px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">How should I care for this T-shirt to maintain its quality?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">To maintain the quality of your regular fit T-shirt, we recommend washing it in cold water and avoiding bleach. Tumble dry on low heat or air dry for best results.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-14"><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">How should I care for this T-shirt to maintain its quality?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    <div onClick={handleContent6}>
    {content6 ? (<div className="  border8 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">What body type is best suited for the regular fit of this T-shirt?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]"> The regular fit of our T-shirt is designed to flatter a wide range of body types, providing a comfortable and relaxed silhouette</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-16"><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">What body type is best suited for the regular fit of this T-shirt?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    <div onClick={handleContent7}>
    {content7 ? (<div className="  border8 h-[130px] w-[350px] lg:h-[130px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Can I wear this T-shirt for workouts or is it more suited for casual wear?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">While our regular fit T-shirts are versatile enough for casual wear, they may not be specifically designed for intense workouts. For exercise-specific clothing, we recommend exploring our activewear collection.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-20"><FaMinus/></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Can I wear this T-shirt for workouts or is it more suited for casual wear?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    <div onClick={handleContent8}>
    {content8 ? (<div className="  border8 h-[80px] w-[350px] lg:h-[100px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
      <div   className="   w-[310px] ">
    <p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Does this T-shirt shrink after washing?</p>
    <p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt is preshrunk to minimize shrinkage, ensuring a consistent fit wash after wash.</p>
    </div>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#099DBD] text-white h-[21px] w-[21px] flex justify-center items-center mb-8 "><FaMinus /></span>
    </div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
    <p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Does this T-shirt shrink after washing?</p>
    <span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus /></span>
    </div>)}
    </div>
    
    </div>
    
          </div>
  )
}

export default PlusItems

'use client'

import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";



const Like = () => {
  const[view,setView]=useState(false);

  const handleView=()=>{
    setView(!view)
  }

  const[color1,setColor1]=useState(false);
 
  const[color2,setColor2]=useState(false);
  const[color3,setColor3]=useState(false);
  const[color4,setColor4]=useState(false);
  const[color5,setColor5]=useState(false);
  const[color6,setColor6]=useState(false);
  const[color7,setColor7]=useState(false);
 

  const handleColorLike1 = () => {
    setColor1(!color1); 
  };
  const handleColorLike2 = () => {
    setColor2(!color2); 
  };
  const handleColorLike3 = () => {
    setColor3(!color3); 
  };
  const handleColorLike4 = () => {
    setColor4(!color4); 
  };
  const handleColorLike5 = () => {
    setColor5(!color5); 
  };
  const handleColorLike6 = () => {
    setColor6(!color6); 
  };
  const handleColorLike7 = () => {
    setColor7(!color7); 
  };

  const[color11,setColor11]=useState(false);
 
  const[color12,setColor12]=useState(false);
  const[color13,setColor13]=useState(false);
  const[color14,setColor14]=useState(false);
  const[color15,setColor15]=useState(false);
  const[color16,setColor16]=useState(false);
  const[color17,setColor17]=useState(false);

  const handleColorLike11 = () => {
    setColor11(!color11); 
  };
  const handleColorLike12 = () => {
    setColor12(!color12); 
  };
  const handleColorLike13 = () => {
    setColor13(!color13); 
  };
  const handleColorLike14 = () => {
    setColor14(!color14); 
  };
  const handleColorLike15 = () => {
    setColor15(!color15); 
  };
  const handleColorLike16 = () => {
    setColor16(!color16); 
  };
  const handleColorLike17 = () => {
    setColor17(!color17); 
  };


  return (
    
<div >


{view ? (<div>

   <div className="flex justify-between 2xl:pt-8">

     <div className="roundImage bg-[#164C96]  h-5 w-12 rounded-[50%] xl:rounded-[50%] 2xl:h-10 2xl:w-20  ">
       <p className="text-[9px] text-white flex  justify-center items-center pt-[3px]">NC</p>
     </div>

     <div className="reviewContent1  pl-2">
   <div className="flex justify-between  w-36 lg:w-40 xl:w-[165px] 2xl:w-[187px]  ">
     
   <h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]"  > Nicolas cage</h3>
  
   <p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2   " >3 Days ago</p>
   </div>
   <span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4  2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
   <h4 className="interFont font-normal text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">Greate Product</h4>

   <p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike1}  className={`flex ${color1 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer`}>

<BiLike className={` mr-1 text-[14px]  `}  /><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px] ` }>Like</p>

</div>
<div onClick={handleColorLike11}  className={`flex ${color11 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer`}>
 
<BiDislike  className={` mr-1 text-[14px] `} /> <p  className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px] `} >Dislike</p>

</div>
</div>
</div>

</div>

<div className="border-b-2 2xl:pt-5  border-[#EDEDED]"></div>

<div className="flex justify-between 2xl:pt-5  ">
     <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
       <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
     </div>
<div className="reviewContent2 pl-2">
<div className="flex justify-between pt-3   w-44 lg:w-48 xl:w-[205px] 2xl:w-[228px]  ">

   <h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]"   >Sr.Robert Downey</h3>
   <p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
   </div>
   <span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4  2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
   <h4 className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">The best product In Market</h4>
   <p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<div className="flex pb-3  justify-between w-28">
<div onClick={handleColorLike2} className={`flex ${color2 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer` }>
 
 <BiLike   className={` mr-1 text-[14px]` }/><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px] `}>Like</p>

</div>

<div onClick={handleColorLike12} className={`flex ${color12 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer`}>
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]  `}>Dislike</p>
</div>
</div>
</div>
</div>
<div className="border-b-2  2xl:pt-5 border-[#EDEDED]"></div>

<div className="flex justify-between pt-3 2xl:pt-8">

     <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
       <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
     </div>

     <div className="reviewContent1  pl-2">
   <div className="flex justify-between  w-36 lg:w-40 xl:w-[165px]  2xl:w-[187px]">
     
   <h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]"  > Nicolas cage</h3>
  
   <p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
   </div>
   <span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4  2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
   <h4 className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">Greate Product</h4>

   <p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike3} className={` flex ${color3 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>

<BiLike  className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Like</p>

</div>
<div onClick={handleColorLike13}  className={`flex ${color13 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer`}>
 
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px] `}>Dislike</p>

</div>
</div>
</div>

</div>

<div className="border-b-2 2xl:pt-5 border-[#EDEDED]"></div>

<div className="flex justify-between 2xl:pt-8  ">
     <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
       <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
     </div>
<div className="reviewContent2 pl-2">
<div className="flex justify-between pt-3   w-44 lg:w-48 xl:w-[205px]  2xl:w-[228px]">

   <h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]"  >Sr.Robert Downey</h3>
   <p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
   </div>
   <span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4 2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
   <h4 className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">The best product In Market</h4>
   <p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<div className="flex pb-3  justify-between w-28">
<div onClick={handleColorLike4} className={`flex ${color4 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer`}>
 
<BiLike   className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px] `}>Like</p>

</div>

<div onClick={handleColorLike14} className={`flex ${color14 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px]  xl:text-[12px] 2xl:text-[13px]`}>Dislike</p>
</div>
</div>
</div>
</div>

<div className="border-b-2 2xl:pt-5 border-[#EDEDED]"></div>

<div className="flex justify-between pt-3 2xl:pt-8">

     <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
       <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
     </div>

     <div className="reviewContent1  pl-2">
   <div className="flex justify-between  w-36 lg:w-40 xl:w-[165px]  2xl:w-[187px]">
     
   <h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]"  > Nicolas cage</h3>
  
   <p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
   </div>
   <span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4 2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
   <h4 className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">Greate Product</h4>

   <p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike5}  className={`flex ${color5 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>

<BiLike  className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Like</p>

</div>
<div onClick={handleColorLike15}  className={`flex ${color15 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>
 
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Dislike</p>

</div>
</div>
</div>

</div>
<p onClick={handleView} className=" 2xl:pt-9 2xl:pb-12 cursor-pointer interFont font-medium text-[11px] xl:text-[13px] flex justify-center hover:translate-x-0.5 hover:font-bold duration-500 text-[#099DBD]">VIEW LESS</p>
</div>):(<div>

<div className="flex justify-between  2xl:pt-8">

 <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
   <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
 </div>

 <div className="reviewContent1  pl-2">
<div className="flex justify-between  w-36 lg:w-40 xl:w-[165px]  2xl:w-[187px]">
 
<h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] "  > Nicolas cage</h3>

<p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
</div>
<span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4 2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
<h4 className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">Greate Product</h4>

<p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike6} className={`flex ${color6 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>

<BiLike  className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Like</p>

</div>
<div onClick={handleColorLike16}  className={`flex ${color16 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>

<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Dislike</p>

</div>
</div>
</div>

</div>

<div className="border-b-2 2xl:pt-5 border-[#EDEDED]"></div>

<div className="flex justify-between 2xl:pt-8  ">
 <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
   <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
 </div>
<div className="reviewContent2 pl-2">
<div className="flex justify-between pt-3   w-44 lg:w-48 xl:w-[205px]  2xl:w-[228px]">

<h3 className="interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]"  >Sr.Robert Downey</h3>
<p className="interFont font-normal text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
</div>
<span className="flex pt-1 2xl:pt-[1px] pb-3 2xl:pb-4 2xl:gap-x-[4px] ">
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   <IoIosStar className="text-[#FFB800] text-[10px] 2xl:text-[12px]"/>
   </span>
<h4 className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] pb-1 2xl:pb-2">The best product In Market</h4>
<p className="interFont font-normal text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#29334199] pb-3 2xl:pb-7">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<div className="flex pb-3  justify-between w-28">
<div onClick={handleColorLike7} className={`flex ${color7 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer `}>

<BiLike   className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Like</p>

</div>

<div onClick={handleColorLike17} className={`flex ${color17 ? 'text-[#099DBD]':'text-[#29334199]'} cursor-pointer  `}>
<BiDislike  className={`mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] xl:text-[12px] 2xl:text-[13px]`}>Dislike</p>
</div>
</div>
</div>
</div>
<p onClick={handleView} className=" 2xl:pt-9 2xl:pb-12 cursor-pointer interFont font-medium text-[11px] xl:text-[13px] flex justify-center  text-[#099DBD] hover:translate-x-0.5 hover:font-bold duration-500">VIEW ALL REVIEWS</p>
</div>)} 
</div>
  )
}

export default Like

// import React, { useState } from 'react'
// import { IoIosStar } from "react-icons/io";
// import { BiLike } from "react-icons/bi";
// import { BiDislike } from "react-icons/bi";


// const View = () => {
//     const[view,setView]=useState(false);

//     const handleView=()=>{
//       setView(!view)
//     }
//     const handleColorLike = () => {
//         setColor('rgb(9,157,189)'); 
//       };
    

//   return (
//     <div onClick={handleView}>


//  {view ? (<div>

//     <div className="flex justify-between ">

//       <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
//         <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
//       </div>

//       <div className="reviewContent1  pl-2">
//     <div className="flex justify-between  w-36">
      
//     <h3 className="interFont font-medium text-[13px] lg:text-[14px]"  > Nicolas cage</h3>
   
//     <p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
//     </div>
//     <span className="flex pt-1 pb-3">
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     </span>
//     <h4 className="interFont font-normal text-[12px] lg:text-[14px] pb-1">Greate Product</h4>

//     <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

// <div className="flex pb-3  justify-between w-28">

// <div onClick={handleColorLike}  className="flex  ">
 
// <BiLike className="text-[#29334199] mr-1 text-[14px]" style={{ color }} /><p className="interFont font-normal text-[11px] text-[#29334199]" style={{ color }}>Like</p>

// </div>
// <div onClick={handleColorLike}   className="flex">
  
// <BiDislike  className="text-[#29334199] mr-1 text-[14px] " style={{ color }}/> <p  className="interFont font-normal text-[11px] text-[#29334199] " style={{ color }}>Dislike</p>

// </div>
// </div>
// </div>

// </div>

// <div className="border-b-2  border-[#EDEDED]"></div>

// <div className="flex justify-between   ">
//       <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
//         <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
//       </div>
// <div className="reviewContent2 pl-2">
// <div className="flex justify-between pt-3   w-44">

//     <h3 className="interFont font-medium text-[13px] lg:text-[14px]"   >Sr.Robert Downey</h3>
//     <p className="interFont font-normal text-[9px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
//     </div>
//     <span className="flex pt-1 pb-3">
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     </span>
//     <h4 className="interFont font-normal text-[12px] pb-1">The best product In Market</h4>
//     <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

// <div className="flex pb-3  justify-between w-28">
// <div  className="flex">
  
// <BiLike   className="text-[#29334199] mr-1 text-[14px]" /><p className="interFont font-normal text-[11px] text-[#29334199]">Like</p>

// </div>

// <div className="flex">
// <BiDislike  className="text-[#29334199] mr-1 text-[14px]" /> <p  className="interFont font-normal text-[11px] text-[#29334199]">Dislike</p>
// </div>
// </div>
// </div>
// </div>
// <div className="border-b-2  border-[#EDEDED]"></div>

// <div className="flex justify-between pt-3">

//       <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
//         <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
//       </div>

//       <div className="reviewContent1  pl-2">
//     <div className="flex justify-between  w-36">
      
//     <h3 className="interFont font-medium text-[13px]"  > Nicolas cage</h3>
   
//     <p className="interFont font-normal text-[9px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
//     </div>
//     <span className="flex pt-1 pb-3">
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     </span>
//     <h4 className="interFont font-normal text-[12px] pb-1">Greate Product</h4>

//     <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

// <div className="flex pb-3  justify-between w-28">

// <div  className="flex  ">
 
// <BiLike  className="text-[#29334199] mr-1 text-[14px]" /><p className="interFont font-normal text-[11px] text-[#29334199]">Like</p>

// </div>
// <div   className="flex">
  
// <BiDislike  className="text-[#29334199] mr-1 text-[14px]" /> <p  className="interFont font-normal text-[11px] text-[#29334199]">Dislike</p>

// </div>
// </div>
// </div>

// </div>

// <div className="border-b-2  border-[#EDEDED]"></div>

// <div className="flex justify-between   ">
//       <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
//         <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
//       </div>
// <div className="reviewContent2 pl-2">
// <div className="flex justify-between pt-3   w-44">

//     <h3 className="interFont font-medium text-[13px]"  >Sr.Robert Downey</h3>
//     <p className="interFont font-normal text-[9px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
//     </div>
//     <span className="flex pt-1 pb-3">
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     </span>
//     <h4 className="interFont font-normal text-[12px] pb-1">The best product In Market</h4>
//     <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

// <div className="flex pb-3  justify-between w-28">
// <div  className="flex">
  
// <BiLike   className="text-[#29334199] mr-1 text-[14px]" /><p className="interFont font-normal text-[11px] text-[#29334199]">Like</p>

// </div>

// <div className="flex">
// <BiDislike  className="text-[#29334199] mr-1 text-[14px]" /> <p  className="interFont font-normal text-[11px] text-[#29334199]">Dislike</p>
// </div>
// </div>
// </div>
// </div>

// <div className="border-b-2  border-[#EDEDED]"></div>

// <div className="flex justify-between pt-3">

//       <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
//         <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
//       </div>

//       <div className="reviewContent1  pl-2">
//     <div className="flex justify-between  w-36">
      
//     <h3 className="interFont font-medium text-[13px]"  > Nicolas cage</h3>
   
//     <p className="interFont font-normal text-[9px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
//     </div>
//     <span className="flex pt-1 pb-3">
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     <IoIosStar className="text-[#FFB800] text-[10px]"/>
//     </span>
//     <h4 className="interFont font-normal text-[12px] pb-1">Greate Product</h4>

//     <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

// <div className="flex pb-3  justify-between w-28">

// <div  className="flex  ">
 
// <BiLike  className="text-[#29334199] mr-1 text-[14px]" /><p className="interFont font-normal text-[11px] text-[#29334199]">Like</p>

// </div>
// <div   className="flex">
  
// <BiDislike  className="text-[#29334199] mr-1 text-[14px]" /> <p  className="interFont font-normal text-[11px] text-[#29334199]">Dislike</p>

// </div>
// </div>
// </div>

// </div>
// <p  className="interFont font-medium text-[11px] flex justify-center hover:translate-x-0.5 hover:font-bold duration-500 text-[#099DBD]">VIEW LESS</p>
// </div>):(<div>

// <div className="flex justify-between ">

//   <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
//     <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
//   </div>

//   <div className="reviewContent1  pl-2">
// <div className="flex justify-between  w-36">
  
// <h3 className="interFont font-medium text-[13px]"  > Nicolas cage</h3>

// <p className="interFont font-normal text-[9px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
// </div>
// <span className="flex pt-1 pb-3">
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// </span>
// <h4 className="interFont font-normal text-[12px] pb-1">Greate Product</h4>

// <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

// <div className="flex pb-3  justify-between w-28">

// <div  className="flex  ">

// <BiLike  className="text-[#29334199] mr-1 text-[14px]" /><p className="interFont font-normal text-[11px] text-[#29334199]">Like</p>

// </div>
// <div   className="flex">

// <BiDislike  className="text-[#29334199] mr-1 text-[14px]" /> <p  className="interFont font-normal text-[11px] text-[#29334199]">Dislike</p>

// </div>
// </div>
// </div>

// </div>

// <div className="border-b-2  border-[#EDEDED]"></div>

// <div className="flex justify-between  ">
//   <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
//     <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
//   </div>
// <div className="reviewContent2 pl-2">
// <div className="flex justify-between pt-3   w-44">

// <h3 className="interFont font-medium text-[13px]"  >Sr.Robert Downey</h3>
// <p className="interFont font-normal text-[9px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
// </div>
// <span className="flex pt-1 pb-3">
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// <IoIosStar className="text-[#FFB800] text-[10px]"/>
// </span>
// <h4 className="interFont font-normal text-[12px] pb-1">The best product In Market</h4>
// <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

// <div className="flex pb-3  justify-between w-28">
// <div  className="flex">

// <BiLike   className="text-[#29334199] mr-1 text-[14px]" /><p className="interFont font-normal text-[11px] text-[#29334199]">Like</p>

// </div>

// <div className="flex">
// <BiDislike  className="text-[#29334199] mr-1 text-[14px]" /> <p  className="interFont font-normal text-[11px] text-[#29334199]">Dislike</p>
// </div>
// </div>
// </div>
// </div>
// <p  className="interFont font-medium text-[11px] flex justify-center  text-[#099DBD] hover:translate-x-0.5 hover:font-bold duration-500">VIEW ALL REVIEWS</p>
// </div>)} 
// </div>
//   )
// }

// export default View

'use client'
import React, { useEffect, useState } from 'react'

const Star = () => {
    const [starWidth, setStarWidth] = useState('50%');

    useEffect(() => {
      // Calculate or fetch the starPercentageRounded value here
      const starPercentageRounded = `${50}%`;
  
      // Update the width of the stars-inner element
      setStarWidth(starPercentageRounded);
    }, [])
 
  return (
    <div>
        {/* ftft7f7f7ytf7
    <div className='reviews'>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: starWidth }}></div>
      </div>
    </div> */}
    <div className='bg-yell'>
        <div></div>
    </div>
  </div>
  )
}



export default Star

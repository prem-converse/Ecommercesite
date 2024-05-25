'use client'
import React, { useEffect, useState } from 'react'

const Star = () => {
    const [starWidth, setStarWidth] = useState('50%');

    useEffect(() => {
      
      const starPercentageRounded = `${50}%`;
  
     
      setStarWidth(starPercentageRounded);
    }, [])
 
  return (
    <div>
        
    
    <div className='bg-yell'>
        <div></div>
    </div>
  </div>
  )
}



export default Star

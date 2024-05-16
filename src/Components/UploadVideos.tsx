import Image from 'next/image'

import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'


  
const UploadVideos = () => {
    const onDrop = useCallback((acceptedFiles:any) => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="border-2 h-24 w-32 border-[#4848481A] rounded-[8px]  ">

    <div {...getRootProps()}>
    <input {...getInputProps()} />
    {
      isDragActive ?
      
        <p>Upload Videos</p> :
        <div className="flex flex-col justify-center items-center -50 pt-3">
          <Image src='/assets/dropzone3.png' height={1000} width={1000}  alt="dropzone" className="h-6 w-6"/>
          <p className="interFont font-normal text-[12px] lg:text-[13px]">Upload Videos</p>
        <p className="interFont text-center font-normal text-[10px] lg:text-[11px] text-[#29334199] ">Only .mp4 .mov and max 200MB</p>
        </div>
    }
  </div>

    </div>
  )
}

export default UploadVideos

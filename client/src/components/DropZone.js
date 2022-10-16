import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import fileIcon from '../assets/file.png'

function DropZone({ onDrop }) {
  const {getRootProps, getInputProps} = useDropzone({ onDrop, multiple: false })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='bg-[#F8F8F9] border border-dotted border-black p-16 flex items-center justify-center w-full max-w-md'>
        <div className='flex flex-col items-center'>
          <img src={fileIcon} alt="" className='w-8 h-8' />
          <p className='text-xl'>Drag and drop or <span className='text-secondary'>browse</span> your files</p>
        </div>
      </div>
    </div>
  )
}

export default DropZone
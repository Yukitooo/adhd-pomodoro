import React from 'react'

type ButtonComponentProps = {
  label: string;
}

function ButtonComponent({label}: ButtonComponentProps) {
  return (
     <button className='bg-red-500 text-white px-8 py-5 rounded m-3 w-48 rounded-[20px]'>
      {label}
    </button>
  )
}

export default ButtonComponent

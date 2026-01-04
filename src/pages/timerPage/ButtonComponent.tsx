import React from 'react'

type ButtonComponentProps={
  onStart: () => void;
}

function ButtonComponent({onStart}: ButtonComponentProps) {
  return (
    <>  
      <button onClick={onStart} className="px-6 py-3 rounded-lg bg-black text-white text-lg font-semibold hover:bg-gray-800 active:scale-95 transition">
        START TIMER
      </button>
    </>
  )
}

export default ButtonComponent
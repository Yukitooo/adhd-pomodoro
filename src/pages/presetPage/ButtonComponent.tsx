import React, { useContext } from 'react'
import { DurationContext } from '../../contexts/duration/DurationContext';
import { useNavigate } from 'react-router-dom';

type ButtonComponentProps = {
  label: string,
  durationTimer: number;
}

function ButtonComponent({label, durationTimer}: ButtonComponentProps) {
  const {duration, setDuration} = useContext(DurationContext)
   const navigate = useNavigate();
  return (
     <button className='bg-red-500 text-white px-8 py-5 rounded m-3 w-48 rounded-[20px]'
     onClick={() => {setDuration(durationTimer);
     navigate("/timer");
       

     }}>
      {label}
    </button>
  )
}

export default ButtonComponent

import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function PresetPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-20px text-red-500 text-2xl'> TIMER PRESETS</h1>
        <ButtonComponent label="Microfocus: 5/2" durationTimer={5}/>
        <ButtonComponent label="Focus: 10/4" durationTimer={10}/>
        <ButtonComponent label="HyperFocus: 15/5" durationTimer={15}/>
        <h1 className='text-20px text-gray-500 text-2xs underline cursor-pointer'> Custom Timer Set</h1>
    </div>
  )
}


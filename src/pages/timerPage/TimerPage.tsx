import React, { useState } from 'react'
import TimerComponent from './TimerComponent'
import ButtonComponent from './ButtonComponent'


// Call ButtonComponent
// Call TimerComponent

function TimerPage() {
  const [isRunning, setIsRunning] = useState(false)
  return (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6">
    <TimerComponent isCountdown={isRunning}/>
    <ButtonComponent onStart={() => setIsRunning(prev => !prev)}/>
  </div>
  )
}
export default TimerPage
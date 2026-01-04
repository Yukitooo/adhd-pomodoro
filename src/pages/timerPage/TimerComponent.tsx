import React, {useContext} from 'react'
import { DurationContext } from '../../contexts/duration/DurationContext'

function TimerComponent() {

  const {duration} = useContext(DurationContext)
  
  return (
    <div>{duration}</div>
  )
}

export default TimerComponent
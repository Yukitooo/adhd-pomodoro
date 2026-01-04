import React, { useContext, useEffect, useState } from "react"
import { DurationContext } from "../../contexts/duration/DurationContext"
import { formatMmss, startCountdown } from "./timerFormatter"

type timerComponentProp = {
  isCountdown: boolean
}

function TimerComponent({ isCountdown }: timerComponentProp) {
  const { duration } = useContext(DurationContext)
  const [display, setDisplay] = useState(formatMmss(duration * 60))

  useEffect(() => {
  if (!isCountdown) {
    return
  }

  const stop = startCountdown(duration, (mmss) => setDisplay(mmss))
  return stop
}, [isCountdown, duration])

  return (
    <div className=" flex justify-center items-center text-7xl">
      {display}
    </div>
  )
}

export default TimerComponent
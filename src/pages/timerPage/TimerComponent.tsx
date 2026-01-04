import React, { useContext, useEffect, useState } from "react"
import { DurationContext } from "../../contexts/duration/DurationContext"
import { formatMmss, startCountdown } from "./timerFormatter"

function TimerComponent() {
  const { duration } = useContext(DurationContext)
  const [display, setDisplay] = useState(formatMmss(duration * 60))

  useEffect(() => {
    const stop = startCountdown(duration, (mmss) => setDisplay(mmss))
    return stop
  }, [duration])

  return (
    <div className="min-h-screen flex justify-center items-center text-7xl">
      {display}
    </div>
  )
}

export default TimerComponent
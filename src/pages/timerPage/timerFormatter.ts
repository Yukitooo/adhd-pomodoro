

type TickHandler = (mmss: string, remainingSeconds: number) => void

export const startCountdown = (
  minutes: number,
  onTick: TickHandler,
  onDone?: () => void
) => {
  let remaining = Math.max(0, Math.floor(minutes * 60))
  onTick(formatMmss(remaining), remaining)

  const id = setInterval(() => {
    remaining -= 1
    if (remaining < 0) {
      clearInterval(id)
      onDone?.()
      return
    }
    onTick(formatMmss(remaining), remaining)
  }, 1000)

  return () => clearInterval(id) // cleanup
}

export const formatMmss = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, "0")}`
}
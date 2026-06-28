import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const targetDate = new Date('2026-10-18T09:00:00+07:00').getTime() // October 18, 2026, 09:00 WIB (GMT+7)

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format double digits
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
  }

  const items = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <section className="w-full flex flex-col items-center justify-center p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-wedding-gold/10 shadow-sm relative z-10 mb-8 animate-fade-in-up">
      <p className="font-serif italic text-xs text-wedding-slate mb-4">
        Menuju Hari Bahagia:
      </p>

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-4 gap-2.5 w-full max-w-sm">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3.5 bg-white/70 backdrop-blur-md border border-wedding-gold/15 rounded-xl shadow-sm hover:border-wedding-gold/35 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="font-serif text-xl md:text-2xl font-bold text-wedding-navy tracking-tight">
              {formatNumber(item.value)}
            </span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-wedding-gold-dark font-semibold mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

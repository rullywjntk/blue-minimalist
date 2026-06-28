import { useEffect, useState } from 'react'
import bgImage from '../assets/wedding_bg.png'

interface CoverProps {
  isOpened: boolean
  onOpen: () => void
}

export default function Cover({ isOpened, onOpen }: CoverProps) {
  const [guestName, setGuestName] = useState<string>('')

  // Retrieve guest name from URL query parameter '?to=Name'
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const toParam = params.get('to')
    if (toParam) {
      setGuestName(decodeURIComponent(toParam))
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 text-center bg-wedding-cream transition-all duration-[1200ms] ease-in-out select-none max-w-[480px] mx-auto shadow-2xl border-x border-wedding-sky/20 ${
        isOpened ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Premium Background Image with Soft Cream Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-cream/80 via-wedding-cream/60 to-wedding-cream/90" />

      {/* Elegant Border Frame */}
      <div className="absolute inset-4 border border-wedding-gold/30 pointer-events-none rounded-sm">
        <div className="absolute inset-1 border border-wedding-gold/10 rounded-sm" />
      </div>

      {/* Top Section - Wedding Header */}
      <div className="relative z-10 mt-12 animate-fade-in-up">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-wedding-slate font-medium mb-2">
          The Wedding of
        </p>
        <div className="w-12 h-[1px] bg-wedding-gold/60 mx-auto"></div>
      </div>

      {/* Middle Section - Bride & Groom Names */}
      <div className="relative z-10 my-auto py-8">
        <h1 className="font-alex text-6xl md:text-7xl text-wedding-navy drop-shadow-sm mb-4 animate-pulse-slow">
          Rian & Nadine
        </h1>
        
        {/* Date of Event */}
        <p className="font-cinzel text-sm tracking-[0.2em] text-wedding-gold-dark font-medium mb-8">
          18 . 10 . 2026
        </p>

        {/* Personalized Guest Box */}
        <div className="mt-8 bg-white/75 backdrop-blur-sm border border-wedding-gold/20 p-5 rounded-lg max-w-xs mx-auto shadow-sm">
          <p className="font-serif italic text-xs text-wedding-slate mb-2">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="font-serif text-lg font-semibold text-wedding-navy mb-1 min-h-[1.75rem] border-b border-dashed border-wedding-gold/30 pb-2">
            {guestName || 'Tamu Undangan'}
          </h2>
          <p className="font-sans text-[10px] tracking-wide text-wedding-slate mt-2">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </div>
      </div>

      {/* Bottom Section - Action Button */}
      <div className="relative z-10 mb-12">
        <button
          onClick={onOpen}
          type="button"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-wedding-navy text-wedding-cream border border-wedding-gold/40 hover:border-wedding-gold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-sans text-xs tracking-[0.2em] uppercase font-semibold"
        >
          <svg
            className="w-4 h-4 text-wedding-gold animate-bounce group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5"
            />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

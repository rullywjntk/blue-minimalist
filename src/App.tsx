import { useState, useRef, useEffect } from 'react'
import Cover from './components/Cover'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import BrideGroom from './components/BrideGroom'
import EventDetail from './components/EventDetail'
import RSVP from './components/RSVP'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize the audio player
  useEffect(() => {
    // Royalty-free Chopin Nocturne Op. 9 No. 2 from Internet Archive (romantic piano)
    audioRef.current = new Audio('https://archive.org/download/NocturnoChopin_798/NocturnoOp.9N2Chopin.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleOpenInvitation = () => {
    setIsOpened(true)
    // Start background music on user gesture to bypass browser autoplay policy
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log('Audio autoplay failed:', error))
    }
  }

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log('Audio play failed:', error))
    }
  }

  return (
    <>
      {/* 1. Fullscreen Cover Component */}
      <Cover isOpened={isOpened} onOpen={handleOpenInvitation} />

      {/* 2. Main Invitation Content Container */}
      <main className={`w-full min-h-screen bg-wedding-cream flex flex-col items-center justify-start p-6 pt-12 pb-24 relative overflow-hidden transition-all duration-[1200ms] ${
        isOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Soft Decorative Blue Accents */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-wedding-sky/10 filter blur-xl" />
        <div className="absolute top-1/3 -right-12 w-40 h-40 rounded-full bg-wedding-slate/10 filter blur-2xl" />

        {/* Hero Video Section */}
        {isOpened && <Hero />}

        {/* Content Border Frame */}
        <div className="w-full max-w-sm border border-wedding-gold/20 p-8 rounded-lg text-center bg-white/40 backdrop-blur-sm shadow-sm relative z-10 mb-8 animate-fade-in-up">
          {/* Floral Decorative Divider */}
          <div className="font-alex text-3xl text-wedding-gold mb-2">❦</div>
          
          <h2 className="font-cinzel text-xs tracking-[0.25em] uppercase text-wedding-slate font-semibold mb-6">
            Mengharap Kehadiran Anda
          </h2>

          <h1 className="font-serif text-3xl font-semibold text-wedding-navy mb-4">
            Selamat Datang di Undangan Kami
          </h1>
          
          <div className="w-12 h-[1px] bg-wedding-gold/50 mx-auto my-6" />

          <p className="font-sans text-sm text-wedding-slate leading-relaxed mb-6">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami menikahkan putra-putri kami.
          </p>

          <p className="font-serif italic text-sm text-wedding-gold-dark font-medium">
            Rian & Nadine
          </p>

          <div className="font-alex text-3xl text-wedding-gold mt-6">❦</div>
        </div>

        {/* Mempelai (Bride & Groom) Section */}
        {isOpened && <BrideGroom />}

        {/* Acara (Event Detail) Section */}
        {isOpened && <EventDetail />}

        {/* RSVP & Wishes Section */}
        {isOpened && <RSVP />}

        {/* Countdown Timer Section */}
        {isOpened && <Countdown />}
      </main>

      {/* 3. Floating Music Control Button (Only shown after cover is opened) */}
      {isOpened && (
        <button
          onClick={toggleMusic}
          type="button"
          className="fixed right-6 bottom-6 z-40 w-12 h-12 bg-white/80 backdrop-blur-md border border-wedding-gold/30 hover:border-wedding-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Toggle background music"
        >
          {/* Floating Music Waves or Disk Rotation */}
          <span className={`absolute inset-1 rounded-full border border-dashed border-wedding-gold/30 ${
            isPlaying ? 'animate-[spin_12s_linear_infinite]' : ''
          }`} />
          
          {isPlaying ? (
            <svg
              className="w-5 h-5 text-wedding-navy animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-wedding-slate opacity-70 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          )}
        </button>
      )}
    </>
  )
}

export default App

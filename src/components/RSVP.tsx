import React, { useState } from 'react'

interface Wish {
  id: string
  name: string
  status: 'hadir' | 'absen'
  count: number
  message: string
  timestamp: string
}

export default function RSVP() {
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'hadir' | 'absen'>('hadir')
  const [count, setCount] = useState(1)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Initialize wishes board with mock guest data
  const [wishesList, setWishesList] = useState<Wish[]>([
    {
      id: '1',
      name: 'Farhan & Alya',
      status: 'hadir',
      count: 2,
      message: 'Selamat ya Rian dan Nadine! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Amin!',
      timestamp: '2 jam yang lalu',
    },
    {
      id: '2',
      name: 'Siti Rahma',
      status: 'hadir',
      count: 1,
      message: 'Selamat menempuh hidup baru! Lancar terus sampai hari-H ya.',
      timestamp: '5 jam yang lalu',
    },
    {
      id: '3',
      name: 'Bambang Wijaya',
      status: 'absen',
      count: 0,
      message: 'Selamat berbahagia Rian & Nadine. Mohon maaf belum bisa hadir secara langsung, namun doa terbaik kami selalu menyertai.',
      timestamp: '1 hari yang lalu',
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)

    // Simulate server submission delay
    setTimeout(() => {
      const newWish: Wish = {
        id: Date.now().toString(),
        name: name.trim(),
        status,
        count: status === 'hadir' ? count : 0,
        message: message.trim(),
        timestamp: 'Baru saja',
      }

      setWishesList((prev) => [newWish, ...prev])
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Reset success state and form
      setTimeout(() => {
        setIsSuccess(false)
        setName('')
        setStatus('hadir')
        setCount(1)
        setMessage('')
      }, 1500)
    }, 1500)
  }

  return (
    <section className="w-full flex flex-col items-center px-4 py-8 bg-white/20 backdrop-blur-sm rounded-xl border border-wedding-gold/10 shadow-sm relative z-10 mb-8 animate-fade-in-up">
      {/* Decorative floral icon */}
      <span className="font-alex text-2xl text-wedding-gold mb-3">❦</span>

      <h2 className="font-cinzel text-xs tracking-[0.25em] uppercase text-wedding-slate font-semibold mb-6">
        Konfirmasi Kehadiran (RSVP)
      </h2>

      {/* RSVP Form Card */}
      <div className="w-full max-w-xs bg-white/70 backdrop-blur-md border border-wedding-gold/15 p-6 rounded-2xl shadow-sm mb-8 text-left">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="rsvp-name" className="font-sans text-[10px] uppercase tracking-wider text-wedding-gold-dark font-bold">
              Nama Lengkap
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting || isSuccess}
              placeholder="Masukkan nama Anda..."
              className="w-full bg-wedding-cream/50 border border-wedding-gold/15 rounded-xl px-3 py-2 text-xs font-sans text-wedding-navy focus:outline-none focus:border-wedding-gold placeholder:text-wedding-sky/60 disabled:opacity-60 transition-colors"
            />
          </div>

          {/* Status Select */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="rsvp-status" className="font-sans text-[10px] uppercase tracking-wider text-wedding-gold-dark font-bold">
              Konfirmasi Kehadiran
            </label>
            <select
              id="rsvp-status"
              value={status}
              onChange={(e) => setStatus(e.target.value as 'hadir' | 'absen')}
              disabled={isSubmitting || isSuccess}
              className="w-full bg-wedding-cream/50 border border-wedding-gold/15 rounded-xl px-3 py-2 text-xs font-sans text-wedding-navy focus:outline-none focus:border-wedding-gold disabled:opacity-60 transition-colors cursor-pointer"
            >
              <option value="hadir">Hadir</option>
              <option value="absen">Tidak Hadir</option>
            </select>
          </div>

          {/* Guest Count Select (Conditional) */}
          {status === 'hadir' && (
            <div className="flex flex-col gap-1.5 animate-fade-in-up">
              <label htmlFor="rsvp-count" className="font-sans text-[10px] uppercase tracking-wider text-wedding-gold-dark font-bold">
                Jumlah Hadir
              </label>
              <select
                id="rsvp-count"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                disabled={isSubmitting || isSuccess}
                className="w-full bg-wedding-cream/50 border border-wedding-gold/15 rounded-xl px-3 py-2 text-xs font-sans text-wedding-navy focus:outline-none focus:border-wedding-gold disabled:opacity-60 transition-colors cursor-pointer"
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
              </select>
            </div>
          )}

          {/* Message Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="rsvp-message" className="font-sans text-[10px] uppercase tracking-wider text-wedding-gold-dark font-bold">
              Ucapan &amp; Doa Restu
            </label>
            <textarea
              id="rsvp-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting || isSuccess}
              placeholder="Tulis ucapan dan doa terbaik Anda untuk kedua mempelai di sini..."
              className="w-full bg-wedding-cream/50 border border-wedding-gold/15 rounded-xl px-3 py-2 text-xs font-sans text-wedding-navy focus:outline-none focus:border-wedding-gold placeholder:text-wedding-sky/60 disabled:opacity-60 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || isSuccess || !name.trim() || !message.trim()}
            className={`w-full py-2.5 px-4 rounded-xl border border-wedding-gold/20 hover:border-wedding-gold text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-center gap-2 ${
              isSuccess
                ? 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-600'
                : isSubmitting
                ? 'bg-wedding-slate text-wedding-cream cursor-wait'
                : 'bg-wedding-navy text-wedding-cream hover:bg-wedding-slate'
            }`}
          >
            {isSubmitting && (
              <svg className="animate-spin h-3.5 w-3.5 text-wedding-cream" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {isSuccess ? 'Terkirim!' : isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
          </button>

        </form>
      </div>

      {/* Wishes Board (Papan Ucapan) */}
      <h3 className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-wedding-slate font-bold mb-4">
        Papan Ucapan &amp; Doa ({wishesList.length})
      </h3>

      <div className="w-full max-w-xs flex flex-col gap-3.5 max-h-96 overflow-y-auto pr-1">
        {wishesList.map((wish) => (
          <div
            key={wish.id}
            className="flex flex-col text-left p-4 bg-white/70 backdrop-blur-md border border-wedding-gold/10 rounded-xl shadow-xs animate-fade-in-up"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-serif text-xs font-bold text-wedding-navy truncate">
                {wish.name}
              </span>
              
              {/* Attendance badge */}
              {wish.status === 'hadir' ? (
                <span className="bg-emerald-100/80 text-emerald-800 font-sans text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0">
                  Hadir ({wish.count})
                </span>
              ) : (
                <span className="bg-slate-100/80 text-slate-600 font-sans text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0">
                  Absen
                </span>
              )}
            </div>

            <p className="font-sans text-[11px] text-wedding-slate leading-relaxed mb-1.5 whitespace-pre-line">
              {wish.message}
            </p>

            <span className="font-sans text-[8px] text-wedding-sky/80 text-right">
              {wish.timestamp}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

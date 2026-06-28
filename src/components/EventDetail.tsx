export default function EventDetail() {
  const events = [
    {
      title: 'Akad Nikah',
      date: 'Minggu, 18 Oktober 2026',
      time: '09:00 - 11:00 WIB',
      venue: 'Masjid Agung Sunda Kelapa',
      address: 'Jl. Taman Sunda Kelapa No. 16, Menteng, Jakarta Pusat',
      mapUrl: 'https://maps.app.goo.gl/yFq6gB612Uex6bNs8',
    },
    {
      title: 'Resepsi Pernikahan',
      date: 'Minggu, 18 Oktober 2026',
      time: '12:00 - 15:00 WIB',
      venue: 'Sabha Widya UI',
      address: 'Gedung Sabha Widya UI, Kampus UI, Depok, Jawa Barat',
      mapUrl: 'https://maps.app.goo.gl/9r9PjRkXoYnCqfEs7',
    },
  ]

  return (
    <section className="w-full flex flex-col items-center text-center px-4 py-8 bg-white/20 backdrop-blur-sm rounded-xl border border-wedding-gold/10 shadow-sm relative z-10 mb-8 animate-fade-in-up">
      {/* Decorative floral icon */}
      <span className="font-alex text-2xl text-wedding-gold mb-3">❦</span>

      <h2 className="font-cinzel text-xs tracking-[0.25em] uppercase text-wedding-slate font-semibold mb-6">
        Informasi Acara
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col gap-6 w-full max-w-xs">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col text-left p-6 bg-white/70 backdrop-blur-md border border-wedding-gold/15 rounded-2xl shadow-sm hover:border-wedding-gold/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Elegant Top Decorative Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-wedding-gold" />

            <h3 className="font-serif text-lg font-bold text-wedding-navy mb-4 border-b border-wedding-gold/10 pb-2">
              {event.title}
            </h3>

            {/* Date Row */}
            <div className="flex gap-3 mb-3 text-wedding-navy">
              <svg
                className="w-4 h-4 text-wedding-gold-dark shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-wider text-wedding-slate font-semibold">
                  Tanggal
                </span>
                <span className="font-serif text-xs font-semibold">
                  {event.date}
                </span>
              </div>
            </div>

            {/* Time Row */}
            <div className="flex gap-3 mb-3 text-wedding-navy">
              <svg
                className="w-4 h-4 text-wedding-gold-dark shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-wider text-wedding-slate font-semibold">
                  Waktu
                </span>
                <span className="font-serif text-xs font-semibold">
                  {event.time}
                </span>
              </div>
            </div>

            {/* Location Row */}
            <div className="flex gap-3 mb-5 text-wedding-navy">
              <svg
                className="w-4 h-4 text-wedding-gold-dark shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-wider text-wedding-slate font-semibold">
                  Tempat
                </span>
                <span className="font-serif text-xs font-bold mb-0.5">
                  {event.venue}
                </span>
                <span className="font-sans text-[11px] text-wedding-slate leading-relaxed">
                  {event.address}
                </span>
              </div>
            </div>

            {/* Google Maps Button */}
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-wedding-navy text-wedding-cream hover:bg-wedding-slate border border-wedding-gold/20 hover:border-wedding-gold/50 rounded-xl transition-all duration-300 text-xs font-semibold uppercase tracking-[0.1em] shadow-sm cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-wedding-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
              </svg>
              Buka Google Maps
            </a>
          </div>
        ))}

        {/* Dresscode & Health Protocol Info Box */}
        <div className="flex flex-col text-center p-5 bg-white/50 backdrop-blur-sm border border-wedding-gold/10 rounded-xl mt-2 shadow-xs">
          <h4 className="font-sans text-[10px] tracking-wider uppercase text-wedding-gold-dark font-bold mb-2">
            Dress Code & Protokol
          </h4>
          <p className="font-serif text-xs text-wedding-navy font-semibold mb-2">
            Dress Code: Batik Modern / Formal
          </p>
          <p className="font-sans text-[10px] text-wedding-slate leading-relaxed">
            Kehadiran Anda sangat berarti. Untuk kenyamanan bersama, mohon tetap mematuhi tata tertib acara. Terima kasih.
          </p>
        </div>
      </div>
    </section>
  )
}

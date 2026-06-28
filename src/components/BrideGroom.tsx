import groomImg from '../assets/groom_avatar.png'
import brideImg from '../assets/bride_avatar.png'

export default function BrideGroom() {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 py-8 bg-white/20 backdrop-blur-sm rounded-xl border border-wedding-gold/10 shadow-sm relative z-10 mb-8 animate-fade-in-up">
      {/* Decorative floral icon */}
      <span className="font-alex text-2xl text-wedding-gold mb-3">❦</span>

      <h2 className="font-cinzel text-xs tracking-[0.25em] uppercase text-wedding-slate font-semibold mb-6">
        Kedua Mempelai
      </h2>

      {/* Intro Quote */}
      <p className="font-serif italic text-xs text-wedding-slate leading-relaxed max-w-xs mb-8">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
        <span className="block font-sans text-[10px] not-italic tracking-wider uppercase text-wedding-gold-dark mt-2 font-semibold">
          — QS. Ar-Rum: 21
        </span>
      </p>

      {/* Profiles Container - Flex layout optimized for mobile */}
      <div className="flex flex-col gap-10 w-full max-w-xs">
        {/* Groom Profile */}
        <div className="flex flex-col items-center">
          {/* Avatar frame */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-wedding-gold/30 shadow-md">
            <img
              src={groomImg}
              alt="Mempelai Pria"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="font-alex text-3xl text-wedding-navy mt-4 mb-1">
            Rian Hidayat
          </h3>
          <p className="font-sans text-[10px] tracking-widest uppercase text-wedding-gold-dark font-bold mb-3">
            Mempelai Pria
          </p>
          
          <p className="font-serif text-xs text-wedding-slate leading-relaxed">
            Putra sulung dari Bapak Ahmad Hidayat <br /> &amp; Ibu Siti Aminah
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-wedding-slate hover:text-wedding-gold-dark transition-colors font-medium mt-3"
          >
            <svg
              className="w-4 h-4 text-wedding-gold-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @rianhdy_
          </a>
        </div>

        {/* Divider icon */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-[1px] bg-wedding-gold/20"></div>
          <span className="text-wedding-gold font-alex text-xl">❦</span>
          <div className="w-10 h-[1px] bg-wedding-gold/20"></div>
        </div>

        {/* Bride Profile */}
        <div className="flex flex-col items-center">
          {/* Avatar frame */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-wedding-gold/30 shadow-md">
            <img
              src={brideImg}
              alt="Mempelai Wanita"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-alex text-3xl text-wedding-navy mt-4 mb-1">
            Nadine Elizabeth
          </h3>
          <p className="font-sans text-[10px] tracking-widest uppercase text-wedding-gold-dark font-bold mb-3">
            Mempelai Wanita
          </p>

          <p className="font-serif text-xs text-wedding-slate leading-relaxed">
            Putri bungsu dari Bapak Robert Smith <br /> &amp; Ibu Maria Elizabeth
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-wedding-slate hover:text-wedding-gold-dark transition-colors font-medium mt-3"
          >
            <svg
              className="w-4 h-4 text-wedding-gold-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @nadine_elizabeth
          </a>
        </div>
      </div>
    </section>
  )
}

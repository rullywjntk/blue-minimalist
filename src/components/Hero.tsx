export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center relative z-10 mb-8 animate-fade-in-up">
      {/* Full Width Video Container - Edge-to-Edge & Flush with Top Border */}
      <div className="w-[calc(100%+3rem)] -mx-6 -mt-12 aspect-video bg-black mb-8 shadow-md">
        <iframe
          className="w-full h-full border-0"
          src="https://www.youtube.com/embed/WJ3-O0o27N8"
          title="Wedding Cinematic Teaser"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Decorative floral icon */}
      <span className="font-alex text-2xl text-wedding-gold mb-3">❦</span>
      
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-wedding-slate font-semibold mb-2">
        Save the Date
      </p>
      
      <h2 className="font-serif text-3xl font-semibold text-wedding-navy mb-4">
        Rian & Nadine
      </h2>
      
      <p className="font-serif italic text-sm text-wedding-slate mb-2">
        "Menuju Lembaran Baru Bersama"
      </p>
    </section>
  )
}

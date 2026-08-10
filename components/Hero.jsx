export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24">
      {/* Background Glow - Scaled down for smaller screens to prevent overflow */}
      <div className="pointer-events-none absolute -top-24 -right-24 md:right-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-skyblue/20 blur-3xl" />

      <div className="section-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge - Adjusted padding and text size for mobile */}
          <span className="inline-block rounded-full border bg-gradient-to-b from-[#157EFD33] to-[#111D39] border-white px-4 py-2 sm:py-4 text-xs sm:text-[20px] font-medium text-[#FAD88E]">
            Community-Driven Rental Platform
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Rent &amp; Lend Items Easy Within Your Community
          </h1>

          <p className="mt-4 sm:mt-5 max-w-md text-sm leading-relaxed text-muted">
            Share items, earn money, and connect with trusted people nearby
            through a secure, location-based app.
          </p>

          {/* Buttons - Full width stack on tiny screens, inline row above sm */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <a
              href="#get-started"
              className="rounded-[8px] bg-[#FAD88E] px-7 py-3 text-center text-sm font-semibold text-ink hover:bg-gold-dark transition-colors"
            >
              Get Started
            </a>
            <a
              href="#action"
              className="rounded-[8px] border border-[#FAD88E] px-7 py-3 text-center text-sm font-semibold text-[#FAD88E] hover:bg-white/5 transition-colors"
            >
              Download App
            </a>
          </div>
        </div>

        {/* Hero Visual Container */}
        <div className="relative flex justify-center lg:justify-end w-full">
          <img
            src="/images/hero-visual.png"
            alt="Trade Savvy app preview"
            className="relative z-10 w-full max-w-[280px] sm:max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
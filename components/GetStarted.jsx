import { Apple, Check, PlayCircle } from "lucide-react";

export default function GetStarted() {
  return (
    <section id="get-started" className="bg-navy py-24">
      <div className="section-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Download the app now and turn your unused items or rental space
            into extra income, quickly and securely.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/app-store-badge.png"
      alt="Download on the App Store"
      className="h-14 w-auto"
    />
  </a>

  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/google-play-badge.png"
      alt="Get it on Google Play"
      className="h-14 w-auto"
    />
  </a>
</div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <Check size={16} className="text-gold font-bold" />
            Trusted by thousands of users
          </p>
        </div>

        {/*
          Drop your app image at /public/images/get-started-visual.png
        */}
        <div className="relative flex justify-center">
          <img
            src="/images/get-started-visual.png"
            alt="Trade Savvy app preview"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

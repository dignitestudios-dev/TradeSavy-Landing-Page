import { Check } from "lucide-react";

const benefits = [
  "Keep 100% of your rental earnings",
  "Secure and fast withdrawals anytime",
  "Transparent wallet and transaction history",
];

export default function EarnMoney() {
  return (
    <section className="bg-white py-24 text-navy">
      <div className="section-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/*
          Drop your app image at /public/images/earn-visual.png
        */}
        <div className="flex justify-center">
          <img
            src="/images/earn-visual.png"
            alt="Featured items in the Trade Savvy app"
            className="w-full max-w-[280px]"
          />
        </div>

        <div>
          <span className="inline-block rounded-full border border-navy/15 px-4 py-1.5 text-[20px] font-semibold text-navy">
            Earn Extra Income
          </span>
          <h2 className="mt-6 text-3xl font-medium leading-tight shadow-3xl sm:text-4xl">
            Earn Money From Your Unused Items
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/60">
            Lend out items you already own and turn them into a steady
            source of income. Track your earnings in real time and withdraw
            funds securely whenever you want.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm font-medium">
                <span className="flex h-5 w-5 items-center justify-center rounded-full  text-gold">
                  <Check size={12} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

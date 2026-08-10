import { PackageSearch, ShieldCheck, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PackageSearch,
    title: "List or Find Items",
    description: "Post items you want to rent or discover available items nearby.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Book & Pay Securely",
    description: "Choose duration, confirm booking, and pay safely within the app.",
  },
  {
    number: "03",
    icon: Star,
    title: "Earn & Review",
    description: "Earn money, withdraw easily, and build trust through review.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-px py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">How It works</h2>
        <p className="mt-3 text-sm text-muted">
          Get started in just three simple steps.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map(({ number, icon: Icon, title, description }) => (
          <div
            key={number}
            className="relative rounded-2xl border-[#157EFD52] px-8 py-2 bg-gradient-to-b from-[#157EFD33] to-[#111D39] text-center "
          >
            <span className="mx-auto mb-6 inline-block rounded-full text-[50px] bg-[#FAD88E] px-4 py-4 text-xs font-bold text-[#152442]">
              {number}
            </span>
            <div className="mx-auto mb-6 flex h-[143px] w-[143px] items-center justify-center rounded-full  bg-[#157EFD33] ">
              <Icon size={70} className="text-[#FAD88E]" />
            </div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm font-medium  text-[D4D2D2] mb-8">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

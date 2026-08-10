import React from "react";

const leftFeatures = [
  {
    title: "Location-Based Search",
    description: "Easily find and lend items in your neighborhood.",
    // Positioning for top-left
    className: "lg:absolute lg:top-12 lg:left-0",
  },
  {
    title: "Secure Payments",
    description: "Transact safely with in-app payment protection.",
    // Positioning for middle-left (offset further left/inward as per design)
    className: "lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-12",
  },
  {
    title: "Reviews & Ratings",
    description: "Trustworthy user ratings and feedback for all transactions.",
    // Positioning for bottom-left
    className: "lg:absolute lg:bottom-12 lg:left-0",
  },
];

const rightFeatures = [
  {
    title: "In-App Chat",
    description: "Communicate directly without sharing personal details.",
    // Positioning for top-right
    className: "lg:absolute lg:top-12 lg:right-0",
  },
  {
    title: "Wallet & Withdrawals",
    description: "Track earnings and withdraw funds seamlessly.",
    // Positioning for middle-right (offset further right/inward as per design)
    className: "lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-12",
  },
  {
    title: "Community Newsfeed",
    description: "Stay updated on local listings and community activity.",
    // Shifted higher from bottom-24 to bottom-36
    className: "lg:absolute lg:bottom-36 lg:right-0",
  },
];

function FeatureItem({ title, description, align, className = "" }) {
  const isRight = align === "right";

  return (
    <div
      className={`flex max-w-[280px] flex-col text-left items-start ${
        isRight
          ? "lg:text-left lg:items-start"
          : "lg:text-right lg:items-end"
      } ${className}`}
    >
      <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-[#475569]">{description}</p>
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <section id="services" className="bg-[#FDF8EE] py-20 text-[#0F172A]">
      {/* Header */}
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">Key Features</h2>
        <p className="mt-4 text-sm leading-relaxed text-[#475569]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto mt-16 max-w-6xl px-6 min-h-[620px] flex flex-col items-start justify-center lg:block">
        
        {/* Center Mobile Mockup / Feature Visual */}
        <div className="w-full py-6 lg:py-0 lg:h-full">
          {/* Mobile Display */}
          <div className="block lg:hidden text-center py-4 font-semibold text-[#0F172A]">
 <img
              src="/images/featurevisual1.png"
              alt="Trade Savvy app features preview"
              className="w-2xl max-w-2xl object-contain drop-shadow-xl"
            />          </div>

          {/* Desktop Display */}
          <div className="hidden lg:flex justify-center items-center h-full">
            <img
              src="/images/features-visual.png"
              alt="Trade Savvy app features preview"
              className="w-2xl max-w-2xl object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Left Features */}
        <div className="flex flex-col gap-8 w-full lg:contents">
          {leftFeatures.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} align="left" />
          ))}
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-8 w-full lg:contents mt-8 lg:mt-0">
          {rightFeatures.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} align="right" />
          ))}
        </div>

      </div>
    </section>
  );
}
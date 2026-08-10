const items = [
  {
    title: "List Anything in Seconds",
    description:
      "Snap a photo and add a few details to get your item in front of nearby renters.",
    image: "/images/action-1.png",
  },
  {
    title: "Browse What's Nearby",
    description:
      "Search and filter items by category, distance, and price around you.",
    image: "/images/action-2.png",
  },
  {
    title: "Discover Featured Picks",
    description:
      "Explore a curated feed of trending and popular items in your community.",
    image: "/images/action-3.png",
  },
  {
    title: "See Every Item Up Close",
    description: "Detailed photos and descriptions help renters decide with confidence.",
    image: "/images/action-4.png",
  },
  {
    title: "Track Every Request",
    description: "Review booking details, dates, and payment before you confirm.",
    image: "/images/action-5.png",
  },
  {
    title: "Manage Requests Easily",
    description: "Approve or decline rental requests right from your history tab.",
    image: "/images/action-6.png",
  },
];

export default function AppInAction() {
  return (
    <section id="action" className="bg-navy py-24">
      <div className="section-px mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">See the App in Action</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          A closer look at how listing, browsing, and managing rentals feels
          from inside the Trade Savvy app.
        </p>
      </div>

      {/*
        Drop six screenshots at /public/images/action-1.png ... action-6.png
      */}
      <div className="section-px mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, description, image }, index) => (
  <div key={title} className="rounded-2xl bg-panel pt-8 text-center">
    <h3 className="text-sm font-semibold text-gold">{title}</h3>
    <p className="mx-auto mt-2 max-w-[220px] text-xs leading-relaxed text-muted">
      {description}
    </p>

    <div
      className={`mt-6 flex justify-center ${
        index === 1 ? "mt-8" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full max-w-[190px] ${
          index === 1 ? "block" : ""
        }`}
      />
    </div>
  </div>
))}
      </div>
    </section>
  );
}

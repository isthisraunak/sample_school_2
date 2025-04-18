export default function Quote() {
  return (
    <section className="py-14 bg-background-green relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Cross icon */}
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4.71 4.68l-3.62-3.62 3.62-3.63 3.63 3.63-3.63 3.62z" />
          </svg>
        </div>
        <blockquote className="mb-4 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-serif italic text-accent">
            "Train up a child in the way he should go, and when he is old, he will not depart from it."
          </p>
        </blockquote>
        <p className="text-accent-light font-semibold">Proverbs 22:6</p>
      </div>
    </section>
  );
}

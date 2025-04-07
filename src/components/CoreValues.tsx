export default function CoreValues() {
  const values = [
    {
      icon: (
        <svg className="w-14 h-14 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-5.33 4-8 8.27-8 12 0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.73-2.67-8-8-12zm0 18c-3.31 0-6-2.69-6-6 0-1 0-3 6-9.6 6 6.6 6 8.6 6 9.6 0 3.31-2.69 6-6 6zm.5-6.8l2.86-2.86L14.25 9l-2.75 2.75L8.75 9 7.5 10.34l2.86 2.86L12 14.84l-.64-.64z" />
        </svg>
      ),
      title: "Faith-Centered",
      description: "We place Christ at the center of all we do, integrating faith into every aspect of learning and life."
    },
    {
      icon: (
        <svg className="w-14 h-14 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
        </svg>
      ),
      title: "Academic Excellence",
      description: "We pursue rigorous academics that challenge students to reach their full God-given potential."
    },
    {
      icon: (
        <svg className="w-14 h-14 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "Biblical Foundation",
      description: "Scripture guides our approach to education, providing wisdom and moral direction."
    },
    {
      icon: (
        <svg className="w-14 h-14 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      title: "Character Formation",
      description: "We cultivate virtues like integrity, compassion, and responsibility in our students."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Our Core Values
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Golden Light Christian Academy is built upon these foundational principles that
          shape our educational approach.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="border border-gray-200 rounded-lg p-6 text-center h-full flex flex-col items-center"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

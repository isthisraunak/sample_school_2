export default function Hero() {
  return (
    <section className="relative bg-primary text-white py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/2784798001/1265853461.jpeg)',
          opacity: '0.3'
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          Faith, Knowledge, and <br className="hidden md:inline" />Character
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Nurturing minds, strengthening faith, and building character in a Christ-centered
          educational environment since 1985.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#admissions"
            className="bg-secondary hover:bg-secondary-light text-primary font-medium px-6 py-3 rounded transition duration-200 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
            </svg>
            Apply Now
          </a>
          <a
            href="#academics"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-medium px-6 py-3 rounded transition duration-200 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}

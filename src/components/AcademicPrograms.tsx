export default function AcademicPrograms() {
  const programs = [
    {
      image: "https://ext.same-assets.com/2784798001/1265853461.jpeg",
      grades: "K-5",
      title: "Elementary School",
      description: "Building a strong academic and spiritual foundation through engaging, Christ-centered curriculum.",
    },
    {
      image: "https://ext.same-assets.com/2784798001/1555026570.jpeg",
      grades: "6-8",
      title: "Middle School",
      description: "Guiding students through critical developmental years with biblical principles and academic rigor.",
    },
    {
      image: "https://ext.same-assets.com/2784798001/3715990223.jpeg",
      grades: "9-12",
      title: "High School",
      description: "Preparing students for college and life through advanced academics and Christian leadership development.",
    },
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Academic Programs
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Our comprehensive programs provide a Christ-centered education that develops the whole child
          — intellectually, spiritually, and socially.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div key={program.title} className="bg-white rounded overflow-hidden shadow-md">
              <div className="h-52 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-secondary text-primary font-bold px-3 py-1">
                  Grades {program.grades}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <a
                  href={`#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#curriculum"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary-dark transition duration-200"
          >
            View Full Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}

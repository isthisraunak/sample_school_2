import { useRef } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Golden Light Christian Academy has been a blessing for our family. The teachers truly care about both academic excellence and spiritual growth.",
      author: "Sarah Johnson",
      role: "Parent of 2 students",
      stars: 5,
    },
    {
      content: "I'm grateful for my time at GLCA. The foundation I received in faith and academics prepared me well for college and beyond.",
      author: "Michael Thompson",
      role: "Alumni, Class of 2018",
      stars: 5,
    },
    {
      content: "As both a parent and a board member, I've seen firsthand how the school's commitment to Christ-centered education transforms young lives.",
      author: "Pastor David Wilson",
      role: "School Board Member",
      stars: 5,
    },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < count;
      const starType = isFilled ? 'filled' : 'empty';
      return (
        <svg
          key={`star-${index}-${starType}`}
          className={`w-5 h-5 ${isFilled ? 'text-secondary' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-4">
          Our Community Speaks
        </h2>
        <p className="text-center text-primary max-w-3xl mx-auto mb-16">
          Hear from parents, students, and alumni about their experiences at Golden Light Christian Academy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${index}`}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <blockquote className="mb-4">
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </blockquote>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

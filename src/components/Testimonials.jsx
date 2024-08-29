import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "GigConnect helped me find amazing clients and grow my freelance business.",
      author: "Sarah J., Graphic Designer",
    },
    {
      quote: "As a startup, we've found incredible talent on GigConnect. It's been a game-changer for our projects.",
      author: "Mike T., Startup Founder",
    },
    {
      quote: "The quality of work and professionalism on GigConnect is unmatched. Highly recommended!",
      author: "Emily R., Marketing Manager",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-purple-600">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
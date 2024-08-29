import React from 'react';

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your next project?</h2>
        <p className="text-xl mb-8">Join GigConnect today and connect with top talent or find exciting opportunities.</p>
        <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          Get Started Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
import React from "react";

export default function Page() {
  return (
    <div className="px-6 md:px-16 py-12 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center h-full ml-6 md:ml-12">
          <p className="text-orange-500 font-semibold mb-2">How It Started</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Our Dream is <br /> Global Learning Transformation
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kawruh was founded by Robert Anderson, a passionate lifelong learner,
            and Maria Sanchez, a visionary educator. Their shared dream was to
            create a digital haven of knowledge accessible to all. United by their
            belief in the transformational power of education, they embarked on a
            journey to build 'Kawruh.' With relentless dedication, they gathered a
            team of experts and launched this innovative platform, creating a global
            community of eager learners, all connected by the desire to explore,
            learn, and grow.
          </p>
        </div>

        {/* Right Section - Image & Stats */}
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="flex-1">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-woman-smiling_23-2149375011.jpg?t=st=1739551425~exp=1739555025~hmac=dcfdbb1d915a161ea12dc4d870ff35d5f19dacd0344023b85a6c214ca1ab92e6&w=900"
              alt="Team Working"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg flex-grow mt-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">3.5</h2>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">23</h2>
              <p className="text-gray-600 text-sm">Project Challenge</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">830+</h2>
              <p className="text-gray-600 text-sm">Positive Reviews</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">100K</h2>
              <p className="text-gray-600 text-sm">Trusted Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

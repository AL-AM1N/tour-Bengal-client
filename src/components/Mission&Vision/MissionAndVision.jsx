import React from 'react'
import { FaEye, FaRocket } from 'react-icons/fa';

function MissionAndVision() {
  return (
    <div>
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <FaRocket className="text-orange-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide authentic, immersive, and safe travel experiences across the
              diverse landscapes of Bengal. We connect travelers with the soul of our
              country through personalized service, ensuring every journey leaves a
              lasting positive impact on both the traveler and the local community.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <FaEye className="text-blue-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be Bengal's premier gateway for global explorers. We aim to redefine
              tourism in Bangladesh by making it accessible, safe, and unforgettable,
              becoming the gold standard for hospitality and sustainable exploration
              in the delta region.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MissionAndVision

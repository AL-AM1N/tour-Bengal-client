import React from "react";
import { MessageCircle, MapPinned, Headphones, ShieldCheck } from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Top Label */}
        <p className="text-sm font-semibold tracking-widest text-[#DF6951] uppercase">
          Get to know us
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-black">
          Your Trusted Partner for <br /> Authentic Bengal Experiences
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-600">
          At TourBengal, our travelers are our main concern. Our dedicated tour
          specialists are available 24/7, offering competitive rates,
          unmatched experiences, and complete flexibility for solo travelers
          or large groups. We don’t just plan trips — we create memories.
        </p>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Card 1 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#FFF3F0]">
              <ShieldCheck className="w-8 h-8 text-black" />
            </div>
            <h3 className="mt-6 font-semibold text-lg">Safety & Security</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Your safety is our top priority throughout the journey.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#FFF3F0]">
              <MapPinned className="w-8 h-8 text-black" />
            </div>
            <h3 className="mt-6 font-semibold text-lg">
              Personalized Itineraries
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Custom travel plans designed for every budget and preference.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#FFF3F0]">
              <Headphones className="w-8 h-8 text-black" />
            </div>
            <h3 className="mt-6 font-semibold text-lg">
              24/7 Dedicated Support
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Our experts are always available for a worry-free journey.
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#FFF3F0]">
              <MessageCircle className="w-8 h-8 text-black" />
            </div>
            <h3 className="mt-6 font-semibold text-lg">
              Attractive Group Rates
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Special discounts and extra savings for group travelers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

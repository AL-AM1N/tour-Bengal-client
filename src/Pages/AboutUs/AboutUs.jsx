import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import AboutImage from '../../assets/Images/AboutImage.jpg'
import TheCountUp from '../../components/CountUp/TheCountUp';
import MissionAndVision from '../../components/Mission&Vision/MissionAndVision';
import TopImg from '../../assets/TopImg.jpeg'

function AboutUs() {
    return (
        <div>
            

            <section className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        {/* LEFT SIDE: Image Gallery Style */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative z-10">
                                <img
                                    className="rounded-2xl shadow-2xl w-full h-[470px] object-cover"
                                    src={AboutImage}
                                    alt="Beautiful Landscape of Bengal"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-100 rounded-2xl -z-0 hidden md:block"></div>

                            {/* Floating Badge */}
                            <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 border-l-4 border-orange-500">
                                <div className="text-3xl font-bold text-gray-800">1.5+</div>
                                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold leading-tight">
                                    Years of <br /> Excellence
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Your Trusted Partner for <span className="text-orange-500">Authentic Bengal</span> Experiences
                            </h2>

                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                At TourBengal, our travelers are our main concern. Our dedicated tour specialists are prepared to help you 24/7. Our curated travel packages offer Competitive Rates and Unmatched Experiences with complete Flexibility and Scalability for solo travelers or large groups. We don't just plan trips; we create memories.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Safety & Security",
                                    "Personalized Itineraries for every budget",
                                    "24/7 Support for a worry-free journey",
                                    "Attractive Group Rates and additional savings"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            
            <TheCountUp></TheCountUp>


            <MissionAndVision></MissionAndVision>

        </div>
    )
}

export default AboutUs

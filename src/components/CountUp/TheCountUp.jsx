import React from 'react';
import CountUp from "react-countup";
import { FaUsers, FaMapMarkedAlt, FaSuitcaseRolling, FaStar } from 'react-icons/fa';

function TheCountUp() {
    const stats = [
        {
            id: 1,
            name: "Happy Travelers",
            end: 150,
            suffix: "+",
            icon: <FaUsers className="text-orange-500" />
        },
        {
            id: 2,
            name: "Active Packages",
            end: 15,
            suffix: "+",
            icon: <FaSuitcaseRolling className="text-green-600" />
        },
        {
            id: 3,
            name: "Destinations",
            end: 50,
            suffix: "+",
            icon: <FaMapMarkedAlt className="text-blue-500" />
        },
        {
            id: 4,
            name: "Success Rate",
            end: 100,
            suffix: "%",
            icon: <FaStar className="text-yellow-500" />
        }
    ];

    return (
        <section className="bg-white py-16">
          <h1 className='text-3xl font-bold text-center pb-16'>Let’s Numbers Talk</h1>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex flex-col items-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-[#fdfbf9]"
                        >
                            {/* Icon Box */}
                            <div className="text-4xl mb-4">
                                {item.icon}
                            </div>

                            {/* CountUp Number */}
                            <div className="text-4xl md:text-5xl font-extrabold text-gray-800">
                                <CountUp
                                    start={0}
                                    end={item.end}
                                    duration={3}
                                    suffix={item.suffix}
                                    separator=","
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                            </div>

                            {/* Label */}
                            <p className="mt-2 text-gray-600 font-semibold tracking-wide uppercase text-sm">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TheCountUp;
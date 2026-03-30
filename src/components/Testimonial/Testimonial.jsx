import React from 'react'

function Testimonial() {
    return (
        <div className='p-15'>
            <h1 className='font-bold text-4xl text-center'>See What Our Clients Say{' '} 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                    About Us
                </span>
            </h1>
            <div className='flex flex-col lg:flex-row justify-center p-6 sm:p-10 gap-4 max-w-7xl mx-auto'>

                <div className="flex items-center justify-center">
                    {/* Card */}
                    <div className="bg-blue-200 max-w-md w-full p-6 rounded-2xl drop-shadow-sm">

                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="User"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    John Doe
                                </h3>
                                <p className="text-sm text-black">
                                    Frontend Developer
                                </p>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                            “This platform is amazing! The UI is clean, responsive, and very easy
                            to use. It helped me improve my frontend skills a lot.”
                        </p>

                        {/* Rating */}
                        <div className="mt-4 text-yellow-400 text-lg">
                            ★ ★ ★ ★ ★
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {/* Card */}
                    <div className="bg-blue-200 max-w-md w-full p-6 rounded-2xl drop-shadow-sm">

                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/90"
                                alt="User"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    John Doe
                                </h3>
                                <p className="text-sm text-black">
                                    Frontend Developer
                                </p>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                            “This platform is amazing! The UI is clean, responsive, and very easy
                            to use. It helped me improve my frontend skills a lot.”
                        </p>

                        {/* Rating */}
                        <div className="mt-4 text-yellow-400 text-lg">
                            ★ ★ ★ ★ ★
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-center">
                    {/* Card */}
                    <div className="bg-blue-200 max-w-md w-full p-6 rounded-2xl drop-shadow-sm">

                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/70"
                                alt="User"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    John Doe
                                </h3>
                                <p className="text-sm text-black">
                                    Frontend Developer
                                </p>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                            “This platform is amazing! The UI is clean, responsive, and very easy
                            to use. It helped me improve my frontend skills a lot.”
                        </p>

                        {/* Rating */}
                        <div className="mt-4 text-yellow-400 text-lg">
                            ★ ★ ★ ★ ★
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Testimonial

import React from 'react'

function Sundarban() {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1706459671568-9809c9d13430?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-auto"
                />
            </div>
            <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center p-10">
                <h1 className="font-serif text-3xl font-bold">Discover the Sundarbans</h1>
                <p className='font-sans'>
                    The Sundarbans, a UNESCO World Heritage Site, is the world’s largest
                    mangrove forest, spanning the coastal regions of Bangladesh and India.
                    Interwoven with countless rivers, creeks, and canals, the forest captivates
                    visitors with its breathtaking natural beauty and remarkable biodiversity.
                    It is home to rare wildlife, including the majestic Royal Bengal Tiger,
                    spotted deer, crocodiles, and a wide variety of bird species. Beyond its
                    scenic splendor, the Sundarbans plays a crucial role in safeguarding coastal
                    areas from cyclones and erosion, making it both a natural wonder and an
                    essential ecological protector.
                </p>
            </div>
        </div>


    )
}

export default Sundarban

import React from 'react'

function Sonargoan() {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
            
            <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center p-10">
                <h1 className="font-serif text-3xl font-bold">Discover Sonargaon</h1>
                <p className='font-sans'>
                    Sonargaon, located in the central region of Bangladesh, is a city steeped in history and cultural heritage. It was once the capital of Bengal before the region's modern-day capital, Dhaka, took over. Known as the "City of Gold," Sonargaon thrived as a center for trade, culture, and education during its heyday. Today, it is renowned for its historical landmarks, including the abandoned merchant town of Panam City, which features beautifully preserved colonial-era buildings. Visitors can also explore the Folk Art and Craft Museum, which showcases traditional Bangladeshi crafts, and visit centuries-old temples and mosques that stand as testament to the city’s rich past. Sonargaon offers a glimpse into the bygone eras and remains an important cultural hub for those interested in the history and heritage of Bangladesh.
                </p>
            </div>
            <div className="w-full lg:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1604993497451-eed6eb271a9c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-auto"
                />
            </div>
        </div>
  )
}

export default Sonargoan

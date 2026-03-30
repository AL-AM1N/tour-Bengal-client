import React from 'react'
import WorldTourPackage from '../Package/WorldTourPackage'
import { motion } from "motion/react"

function WorldAllPackages({ packages }) {
    return (
        <div className='pb-10 bg-[#faedeb]'>
            <h1 className='text-3xl text-center p-8 font-bold'>International Tour Packages</h1>
            <motion.div
                className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
                >
                {
                    packages.map(singlePackage => <WorldTourPackage key={singlePackage._id} singlePackage={singlePackage}></WorldTourPackage>)
                }
            </motion.div>

            <div className='w-full flex justify-center items-center pt-10'>
                <button className="btn btn-outline">See More</button>
            </div>
        </div>
    )
}

export default WorldAllPackages

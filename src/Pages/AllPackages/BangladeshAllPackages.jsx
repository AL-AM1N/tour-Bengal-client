import React from 'react'
import Package from '../Package/BangladeshTourPackage'
import BangladeshTourPackage from '../Package/BangladeshTourPackage';
import { motion } from "motion/react"

function BangladeshAllPackages({ packages }) {

    console.log(packages);
    return (
        <div className='pb-10 bg-[#faedeb]'>
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
                    packages.map(singlePackage => <BangladeshTourPackage key={singlePackage._id} singlePackage={singlePackage}></BangladeshTourPackage>)
                }
            </motion.div>

        </div>
    )
}

export default BangladeshAllPackages

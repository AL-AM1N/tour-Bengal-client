import React from 'react'
import { motion } from "motion/react"

const WorldTourPackage = ({singlePackage}) => {
    return (
        <motion.div
        variants={{
                hidden: {
                    opacity: 0,
                    y: 50
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    }
                }
            }}
        
        >
            <div className="card bg-base-100 w-full max-w-sm shadow-sm mx-auto">
                <figure>
                    <img
                        className="w-full h-48 object-cover"
                        src={singlePackage.image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{singlePackage.tour_name}</h2>
                    <p>
                        A card component has a figure, a body part, and inside body there are title and actions parts
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-[#DF6951]">View Details</button>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default WorldTourPackage

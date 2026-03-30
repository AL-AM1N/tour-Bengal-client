import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router'

const BangladeshTourPackage = ({singlePackage}) => {
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
            <div className="font-sans card bg-base-100 w-full max-w-sm shadow-sm mx-auto h-[550px]">
                <figure>
                    <img
                        className="w-full h-60 object-cover"
                        src={singlePackage.coverImage}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{singlePackage.title}</h2>
                    <p>
                        {singlePackage.shortDescription}
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/package-details/${singlePackage._id}`}><button className="btn btn-primary bg-[#DF6951]">View Details</button></Link>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default BangladeshTourPackage

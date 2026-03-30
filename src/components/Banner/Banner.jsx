import React from 'react'
import { motion } from "motion/react"
import BannerImg from "../../assets/BannerImg.png"
import { Link } from 'react-router'


// https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

function Banner() {
    return (
        <div>
            <div
                className="hero h-[80vh] bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        `url(${BannerImg})`,
                }}
            >
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-white text-left">
                    <div className="max-w-md">
                        <h1 className="font-serif mb-5 text-5xl font-bold">No matter where you’re going to, we’ll take you there</h1>
                        <motion.h1
                            className="font-serif mb-5 text-3xl text-white font-bold"
                            animate={{ 
                                // opacity: [0, 1, 0],
                                color: ['#ff5733', '#33ff33', '#8a33ff', '#ffffff'],
                                transition: { duration: 2, repeat: Infinity } 
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >Going on a tour...!!!</motion.h1>
                        <Link to='/bangladesh-tours'><button className="btn btn-primary bg-[#DF6951]">GET STARTED</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

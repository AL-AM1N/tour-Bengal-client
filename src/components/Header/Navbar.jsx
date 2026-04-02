import React from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform } from "motion/react";

function Navbar() {

    /* Motion Scroll Effects*/
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 60],
        ["rgba(255,255,255,1)", "rgba(255,255,255,0.65)"]
    );

    const blur = useTransform(
        scrollY,
        [0, 60],
        ["blur(0px)", "blur(14px)"]
    );

    const boxShadow = useTransform(
        scrollY,
        [0, 60],
        ["0px 0px 0px rgba(0,0,0,0)", "0px 8px 25px rgba(0,0,0,0.12)"]
    );

    /* Desktop Links */
    const link = (
        <>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li>
                <details>
                    <summary className="cursor-pointer">TOUR PACKAGES</summary>
                    <ul className="p-2 bg-base-100 w-52 z-10 shadow-md">
                        <li><Link to='/bangladesh-tours'>BANGLADESH TOURS</Link></li>
                        <li><Link to='/international-tours'>INTERNATIONAL TOURS</Link></li>
                    </ul>
                </details>
            </li>
            <li><Link to="/contact">CONTACT US</Link></li>
        </>
    );

    /* Mobile Links*/
    const mobileLinks = (
        <>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li>
                <details>
                    <summary>TOUR PACKAGES</summary>
                    <ul className="p-2 bg-base-100 shadow-md">
                        <li><Link to='/bangladesh-tours'>BANGLADESH TOURS</Link></li>
                        <li><Link to='/international-tours'>INTERNATIONAL TOURS</Link></li>
                    </ul>
                </details>
            </li>
            <li><Link to="/contact">CONTACT US</Link></li>
        </>
    );

    return (
        <motion.div
            style={{
                backgroundColor,
                backdropFilter: blur,
                boxShadow
            }}
            className="sticky top-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="navbar bg-transparent">

                    {/* LEFT */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-60"
                            >
                                {mobileLinks}
                            </ul>
                        </div>

                        <Link to='/'>
                            <h1 className='font-serif font-bold text-4xl'>
                                Tour
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-yellow-500">
                                    Bengal
                                </span>
                            </h1>
                        </Link>
                    </div>

                    {/* CENTER */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="navbar-end">
                        <Link to='/login'>
                            <button className="btn bg-[#DF6951] border-none text-white shadow-md">
                                Login
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;

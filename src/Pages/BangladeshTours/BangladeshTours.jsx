import React, { useState, useEffect } from 'react'
import BangladeshAllPackages from '../AllPackages/BangladeshAllPackages'
import { data, useLoaderData } from 'react-router'
import TheCountUp from '../../components/CountUp/TheCountUp';
import TopImg from '../../assets/TopImg.jpeg'

function BangladeshTours() {

   const loadPackages = useLoaderData()

   // console.log(loadPackages);

   // 1. Initialize with data immediately (Fixes "Data sometimes not showing")
    // We check if it's an array to avoid crashes if data is null/undefined
    const initialData = Array.isArray(loadPackages) ? loadPackages : [];

    const [allPackages, setAllPackages] = useState(initialData); 
    const [packages, setPackages] = useState(initialData);

    // const [allPackages, setAllPackages] = useState([]); // actual data, use this for loading the main data safely, page load hower pore r empty dekhabe na 

    // useEffect(() => {
    //     fetch('https://tourify-server.vercel.app/public-packages')
    //     .then(res => res.json())
    //     .then(data => setAllPackages(data))
    // },[])

   // console.log(allPackages.length)

   // const [packages, setPackages] = useState([]);

   const [search, setSearch] = useState('');
    



    // Sync loader data into local state once it is available.
    // allPackages keeps the original data untouched,
    // packages is used for sorting/filtering/searching in the UI.
    useEffect(() => {
    if (Array.isArray(loadPackages)) {
        setAllPackages(loadPackages);
        setPackages(loadPackages);
    }
}, [loadPackages]);


    const handleInputSearch = (value) => {
        setSearch(value);

        // 3. Fix for "Clear Search": 
        // If value is empty string (user cleared input), reset to allPackages
        if (!value.trim()) {
            setPackages(allPackages);
            return;
        }

        const searchData = allPackages.filter(pack => 
            pack.title.toLowerCase().includes(value.toLowerCase())
        );

        setPackages(searchData);
    };

    const handleSort = (value) => {
        if (value === "lowToHigh") {
            const ascData = [...allPackages].sort((a, b) => a.currentPrice - b.currentPrice);
            setPackages(ascData);
        }

        else if (value === "highToLow") {
            const dscData = [...allPackages].sort((a, b) => b.currentPrice - a.currentPrice);
            setPackages(dscData);
        }
        else {
            setPackages(allPackages);
        }
    }


    return (
        <>
            <div className='bg-[#faedeb]'>
                <div className="relative h-[40vh] w-full">
                    <img
                        src={TopImg}
                        alt=""
                        className="inset-0 w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    {/* <div className="absolute inset-0 bg-black/30" /> */}

                    {/* Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="bg-black/40 text-white px-6 py-3 text-3xl md:text-5xl font-bold rounded-lg">
                            Tour Packages
                        </h1>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <label className="input w-6xl m-6">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" value={search} onChange={(e) => handleInputSearch(e.target.value)} required placeholder="Search" />
                    </label>
                </div>

                <div className='max-w-6xl mx-auto flex justify-between items-center pb-6'>
                    <h1 className='font-bold ml-6'>Showing {packages.length} packages</h1>
                    <select onChange={e => handleSort(e.target.value)} className="border rounded-md px-4 py-2 w-80 bg-[#ffffff] font-semibold mr-6">
                        <option value=''>Sort By</option>
                        <option value='lowToHigh'>Price: Low to High</option>
                        <option value='highToLow'>Price: High to Low</option>

                    </select>
                </div>

                <div>
                    <BangladeshAllPackages packages={packages}></BangladeshAllPackages>
                </div>
            </div>
        </>
    )
}

export default BangladeshTours

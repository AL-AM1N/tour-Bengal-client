import React from 'react'
import Banner from '../../components/Banner/Banner'
import BangladeshAllPackages from '../AllPackages/BangladeshAllPackages'
import { Link, useLoaderData } from 'react-router'
import ManageFeatures from '../ManageFeatures/ManageFeatures'
import WorldAllPackages from '../AllPackages/WorldAllPackages'
import Testimonial from '../../components/Testimonial/Testimonial'
import TheCountUp from '../../components/CountUp/TheCountUp'
import ImageAutoSlider from '../../components/ImageAutoSlider/ImageAutoSlider'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'

function Home() {

  const packages = useLoaderData()


  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <div className='pb-10'>
        <ImageAutoSlider></ImageAutoSlider>
      </div>
      <div>
        <h1 className='font-serif text-3xl text-center p-8 font-bold bg-[#faedeb]'>Bangladesh Tour Packages</h1>
        {Array.isArray(packages) ? (
          <BangladeshAllPackages packages={packages.slice(0,6)}></BangladeshAllPackages>
        ) : (
          <div className="text-center p-8 text-red-500 font-bold">Failed to load packages from the server.</div>
        )}
        <div className='w-full flex justify-center items-center pb-10 bg-[#faedeb]'>
          <Link to='/bangladesh-tours'><button className="btn btn-primary bg-[#DF6951]">VIEW ALL</button></Link>
        </div>
      </div>

      <ManageFeatures></ManageFeatures>
      <WorldAllPackages packages={packages}></WorldAllPackages>
      <TheCountUp></TheCountUp>
      {/* <Testimonial></Testimonial> */}
    </div>
  )
}

export default Home

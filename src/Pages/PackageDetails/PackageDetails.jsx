import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './BangladeshTours.css'
import BookingForm from '../../components/BookingForm/BookingForm';
import Information from '../../components/Information/Information';
import TourPlan from '../../components/TourPlan/TourPlan';
import Gallery from '../../components/Gallery/Gallery';
import { useLoaderData } from 'react-router';

function PackageDetails() {
    const singlePackageDetail = useLoaderData();
    console.log(singlePackageDetail);
  return (
        <div className="w-full">

            {/* HERO IMAGE */}
            <div className="relative h-[60vh] w-full">
                <img
                    src="https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=1932&auto=format&fit=crop"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* TABS CARD */}
            <div className="relative z-20 max-w-6xl mx-auto -mt-24 bg-white rounded-xl shadow-lg overflow-hidden">

                <Tabs>
                    {/* BLOCK TABS */}
                    <TabList className="grid grid-cols-3 bg-gray-100">
                        <Tab className="block-tab">Information</Tab>
                        <Tab className="block-tab">Tour Plan</Tab>
                        <Tab className="block-tab">Gallery</Tab>
                    </TabList>

                    <div className="p-6">
                        {/* Information */}
                        <TabPanel>
                            <div className='flex gap-2  pb-10'>
                                <h2 className="text-3xl font-bold ">Information: </h2> 
                                <h3 className='text-gray-700 text-3xl'>{singlePackageDetail.title}</h3>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6'>
                                <div className='w-full lg:w-[70%]'>

                                    <Information singlePackageDetail={singlePackageDetail}></Information>

                                </div>
                                <div className='w-full lg:w-[30%] flex flex-col items-center bg-[#EDEDED] h-200'>

                                    <BookingForm singlePackageDetail={singlePackageDetail}></BookingForm>

                                </div>
                            </div>
                        </TabPanel>


                        {/* Tour Plan */}
                        <TabPanel>
                            <div className='flex gap-2  pb-10'>
                                <h2 className="text-3xl font-bold ">Tour Plan: </h2> 
                                <h3 className='text-gray-700 text-3xl'>{singlePackageDetail.title}</h3>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6'>
                                <div className='w-full lg:w-[70%]'>

                                    <TourPlan singlePackageDetail={singlePackageDetail}></TourPlan>

                                </div>
                                <div className='w-full lg:w-[30%] flex flex-col items-center bg-[#EDEDED] h-200'>

                                    <BookingForm singlePackageDetail={singlePackageDetail}></BookingForm>

                                </div>
                            </div>
                        </TabPanel>

                        {/* Gallery */}
                        <TabPanel>
                            <div className='flex gap-2  pb-10'>
                                <h2 className="text-3xl font-bold ">Gallery: </h2> 
                                <h3 className='text-gray-700 text-3xl'>{singlePackageDetail.title}</h3>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6'>
                                <div className='w-full lg:w-[70%]'>
                                    {/* Grid Container */}

                                    <Gallery singlePackageDetail={singlePackageDetail}></Gallery>


                                </div>
                                <div className='w-full lg:w-[30%] flex flex-col items-center bg-[#EDEDED] h-200'>

                                    <BookingForm singlePackageDetail={singlePackageDetail}></BookingForm>

                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>

            </div>
        </div>
    );
}

export default PackageDetails

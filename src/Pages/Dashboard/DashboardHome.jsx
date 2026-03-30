import React from "react";
import { useLoaderData } from "react-router";

function DashboardHome() {

  const {allPackages, bookings, contactMessages} = useLoaderData();

  console.log(allPackages, bookings, contactMessages);
  
  return (
    <div className="">
      <div className="stats shadow flex flex-col">
        <div className="stat place-items-center">
          <div className="stat-title  text-3xl">Total Packages</div>
          <div className="stat-value">{allPackages?.length || 0}</div>
        </div>

        <div className="stat place-items-center ">
          <div className="stat-title text-3xl">Total Bookings</div>
          <div className="stat-value text-secondary">{bookings?.length || 0}</div>
        </div>

        <div className="stat place-items-center ">
          <div className="stat-title  text-3xl">Contact Message</div>
          <div className="stat-value">{contactMessages?.length || 0}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;

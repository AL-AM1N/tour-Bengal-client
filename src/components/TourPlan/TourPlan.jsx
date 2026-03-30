import React from "react";

function TourPlan({ singlePackageDetail }) {
  return (
    <>
      <div className="space-y-6 text-gray-700 text-justify">
        {singlePackageDetail.tourPlan.map((dayPlan, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-1">
              Day {dayPlan.day}: {dayPlan.title}
            </h3>
            <p>{dayPlan.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TourPlan;

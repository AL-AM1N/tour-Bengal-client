import React from 'react';

function Gallery({ singlePackageDetail }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {singlePackageDetail.gallery.map((imageUrl, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
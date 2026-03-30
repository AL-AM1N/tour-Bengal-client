import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { toast, Bounce } from 'react-toastify';


const UpdatePackage = () => {
  const packageData = useLoaderData(); // loaded package from server
  const [paragraphs, setParagraphs] = useState([""]);
  const [days, setDays] = useState([{ title: "", description: "" }]);
  const [images, setImages] = useState([""]);

  // Initialize state when data is loaded
  useEffect(() => {
    if (packageData) {
      setParagraphs(packageData.information || [""]);
      setDays(packageData.tourPlan || [{ title: "", description: "" }]);
      setImages(packageData.gallery || [""]);
    }
  }, [packageData]);

  // --- INFORMATION ---
  const addParagraph = () => setParagraphs([...paragraphs, ""]);
  const removeParagraph = (i) =>
    setParagraphs(paragraphs.filter((_, index) => index !== i));
  const handleParagraphChange = (i, value) => {
    const updated = [...paragraphs];
    updated[i] = value;
    setParagraphs(updated);
  };

  // --- TOUR PLAN ---
  const addDay = () => setDays([...days, { title: "", description: "" }]);
  const removeDay = (i) => setDays(days.filter((_, index) => index !== i));
  const handleDayChange = (i, field, value) => {
    const updated = [...days];
    updated[i][field] = value;
    setDays(updated);
  };

  // --- GALLERY ---
  const addImage = () => setImages([...images, ""]);
  const removeImage = (i) =>
    setImages(images.filter((_, index) => index !== i));
  const handleImageChange = (i, value) => {
    const updated = [...images];
    updated[i] = value;
    setImages(updated);
  };

  // --- UPDATE ---
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedPackage = {
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      coverImage: e.target.coverImage.value,
      regularPrice: Number(e.target.regularPrice.value),
      currentPrice: Number(e.target.currentPrice.value),
      information: paragraphs.filter((p) => p.trim()),
      tourPlan: days.map((d, i) => ({
        day: i + 1,
        title: d.title,
        description: d.description,
      })),
      gallery: images.filter((img) => img.trim()),
    };

    fetch(`http://localhost:3000/packages/${packageData._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // alert("Package updated successfully ✅");
          toast.success("Package updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          alert("No changes detected or update failed ⚠️");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Update Package
        </h2>

        <form onSubmit={handleUpdate} className="space-y-10">
          {/* Package Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Package Title
            </label>
            <input
              name="title"
              defaultValue={packageData.title}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              defaultValue={packageData.shortDescription}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 min-h-[80px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image URL
            </label>
            <input
              name="coverImage"
              defaultValue={packageData.coverImage}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Prices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regular Price
              </label>
              <input
                type="number"
                name="regularPrice"
                defaultValue={packageData.regularPrice}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Price
              </label>
              <input
                type="number"
                name="currentPrice"
                defaultValue={packageData.currentPrice}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Information
            </h3>
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <div key={i} className="relative">
                  <textarea
                    placeholder={`Paragraph ${i + 1}`}
                    value={para}
                    onChange={(e) => handleParagraphChange(i, e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  {paragraphs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeParagraph(i)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      ❌
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addParagraph}
              className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              + Add Paragraph
            </button>
          </div>

          {/* Tour Plan */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tour Plan
            </h3>
            <div className="space-y-6">
              {days.map((day, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-4 space-y-3 relative"
                >
                  <h4 className="font-semibold text-gray-700">Day {i + 1}</h4>
                  <input
                    placeholder="Day Title"
                    value={day.title}
                    onChange={(e) =>
                      handleDayChange(i, "title", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <textarea
                    placeholder="Day Description"
                    value={day.description}
                    onChange={(e) =>
                      handleDayChange(i, "description", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  {days.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDay(i)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      ❌ Remove Day
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addDay}
              className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              + Add Day
            </button>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Gallery
            </h3>
            <div className="space-y-3">
              {images.map((img, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input
                    placeholder={`Image URL ${i + 1}`}
                    value={img}
                    onChange={(e) => handleImageChange(i, e.target.value)}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ❌
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addImage}
              className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              + Add Image
            </button>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Update Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePackage;

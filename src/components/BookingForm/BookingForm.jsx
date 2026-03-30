import React from "react";
import { toast, Bounce } from 'react-toastify';

function BookingForm({ singlePackageDetail }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const packageTitle = singlePackageDetail.title;
    const name = e.target.name.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const guests = e.target.guests.value;
    const comments = e.target.comments.value;
    const date = new Date().toISOString();

    const newBooking = {
      packageTitle,
      name,
      address,
      email,
      mobile,
      guests,
      comments,
      date,
    };

    //console.log(newBooking);
    fetch("https://tour-bengal-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving bookings", data);
        if (data.insertedId) {
          // alert('Booking Successfull');
          toast.success(" Booking Successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
          e.target.reset();
        }
      });
  };
  return (
    <>
      <h1 className="text-4xl text-center font-bold p-6">Book This Tour</h1>
      {/* Booking Message */}
      <p className="bg-yellow-100 text-yellow-900 p-4 rounded-lg mb-4 text-center">
        You can book this tour by calling{" "}
        <a
          href="tel:01712457935"
          className="font-semibold text-black underline"
        >
          01712457935
        </a>{" "}
        or filling out this form below.
      </p>
      <div className="card bg-[#EDEDED] w-full max-w-sm shrink-0 ">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Address</label>
            <input
              name="address"
              type="text"
              className="input"
              placeholder="Address"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Mobile</label>
            <input
              name="mobile"
              type="number"
              className="input"
              placeholder="Mobile"
              required
            />
            <label className="label">Number of guests</label>
            <input
              name="guests"
              type="number"
              className="input"
              placeholder="Number of guests"
              required
            />
            <label className="label">Comments</label>
            <textarea
              name="comments"
              className="input h-24"
              placeholder="Write your comments here..."
            />
            <button className="btn btn-neutral mt-4">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;

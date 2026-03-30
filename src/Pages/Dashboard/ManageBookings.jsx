import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast, Bounce } from "react-toastify";

function ManageBookings() {
  const loadBookings = useLoaderData();
  const [bookings, setBookings] = useState(loadBookings);
  console.log(bookings);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          // alert("Deleted successfully");
          toast.success("Deleted successfully", {
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
          const remaining = bookings.filter((book) => book._id !== id);
          setBookings(remaining);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4 px-10">
          <h2 className="text-xl font-semibold">Manage Bookings</h2>
        </div>
        <table className="table table-base">
          <thead>
            <tr>
              <th></th>
              <th>Tour Name</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Guests</th>
              <th>Date</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{booking.packageTitle}</td>
                <td>{booking.name}</td>
                <td>{booking.address}</td>
                <td>{booking.email}</td>
                <td>{booking.mobile}</td>
                <td>{booking.guests}</td>
                <td>{new Date(booking.date).toLocaleString()}</td>
                <td>{booking.comments}</td>
                <td>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Tour Name</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Guests</th>
              <th>Date</th>
              <th>Comments</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ManageBookings;

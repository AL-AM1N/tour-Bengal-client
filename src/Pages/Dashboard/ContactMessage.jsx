import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { toast, Bounce } from 'react-toastify';


function ContactMessage() {
  const loadContactMessages = useLoaderData()
  const [messages, setMessages] = useState(loadContactMessages);


  // Handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/contactMessages/${id}`, {
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
          const remaining = messages.filter((message) => message._id !== id);
          setMessages(remaining); // Update the state to remove the deleted message
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4 px-10">
          <h2 className="text-xl font-semibold">Manage Contact Messages</h2>
        </div>
        <table className="table table-base">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message._id}>
                <th>{index + 1}</th>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>{new Date(message.date).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => handleDelete(message._id)}
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
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ContactMessage;

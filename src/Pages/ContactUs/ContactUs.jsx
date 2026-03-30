import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import { toast, Bounce } from 'react-toastify';


function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const newMessage = {
      name,
      email,
      subject,
      message,
      date: new Date().toISOString(), // Add a date timestamp
    };

    // Send the new message to the server
    fetch("http://localhost:3000/contactMessages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // alert("Message Sent Successfully");
          toast.success("Message Sent Successfully", {
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
          e.target.reset(); // Reset the form after submission
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT BOX: Contact Information */}
        <div className="w-full md:w-2/5 bg-gray-900 p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8">CONTACT US</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Have questions about our Bengal expeditions? Reach out and our team
            will get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Address</h4>
                <p className="text-gray-400">
                  Holding No: 123, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <FaPhoneAlt className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-400">+880-1712345678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-400">support@tourbengal.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded-lg">
                <FaGlobe className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Website</h4>
                <p className="text-gray-400">www.tourbengal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BOX: Input Form */}
        <div className="w-full md:w-3/5 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            GET IN TOUCH
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Inquiry Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Send Message <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

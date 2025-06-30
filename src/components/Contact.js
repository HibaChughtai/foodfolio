// Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact" className="flex flex-col md:flex-row items-center px-6 py-16 bg-white">
      <div className="md:w-1/2">
        <img src="https://cdn.pixabay.com/photo/2021/09/28/07/36/pakistani-food-6664282_960_720.jpg" alt="Contact" className="rounded shadow-md" />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h3 className="text-3xl font-bold text-red-700 mb-4">See You Soon</h3>
        <p className="text-gray-700 text-lg mb-2">Reach me at:</p>
        <p>Email: hibachughtai@email.com</p>
        <p>Phone: 0300-1234567</p>
        <p>WhatsApp: <a href="https://wa.me/923001234567" className="text-blue-500">Click here</a></p>
      </div>
    </section>
  );
}

export default Contact;

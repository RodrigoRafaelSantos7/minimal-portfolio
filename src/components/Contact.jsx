import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/navkkpgb"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title id="contact">Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md border-gray-200 
             focus:outline-none focus:border-stone-900"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md 
            border-gray-200 focus:outline-none focus:border-stone-900"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="mb-4 p-2 bg-transparent border-2 rounded-md        
            border-gray-200 focus:outline-none focus:border-stone-900"
            required
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base 
            font-medium text-white bg-gradient-to-r from-yellow-500 
            to-pink-500 rounded-md drop-shadow-md transition
            hover:scale-[1.10] focus:scale-[1.10] active:scale-103
            hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

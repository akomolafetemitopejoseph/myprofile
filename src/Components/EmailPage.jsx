import React from "react";

const Emailpage = () => {
  return (
    <div className="bg-gray-800 h-screen flex items-center">
      <div class="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
        <form>
          <div class="mb-4">
            <label class="block mb-2 text-gray-50" for="name">
              Name
            </label>
            <input
              placeholder="Your Name"
              class="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-gray-50" for="email">
              Email
            </label>
            <input
              placeholder="Your Email"
              class="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-gray-50" for="message">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              class="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
              rows="4"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div class="mb-4">
            <button
              class="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Emailpage;

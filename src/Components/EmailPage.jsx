import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Emailpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_47tn6df", "template_gffygo6", form.current, {
        publicKey: "U_CPVRyHKY9JSPKGr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
   
  };
  return (
    <>
      <div className="bg-gray-900  h-full   flex items-center max-md:h-fit">
        <div className="max-w-[360px] w-full mx-auto  bg-[#0d1b2a] rounded-lg shadow-md p-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-50">Name</label>
              <input
                className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                type="text"
                name="name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-50">Email</label>
              <input
                className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                type="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-50">Message</label>
              <textarea
                className="w-full resize-none p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                name="message"
              />
            </div>
            <div>
              <input
                className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default Emailpage;

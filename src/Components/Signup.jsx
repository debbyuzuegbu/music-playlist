import React from "react";
import Button from "../utils/Button";

const Signup = () => {
  return (
    <div id="signup" className="pb-8 w-full bg-gray-500 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="md:pt-22 pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sign Up
          </p>
          <p className="py-2">
            Submit the form below to register your favorite playlist
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/61b54c5e-a971-4c99-bd20-776e668cfb27"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter music album you would like to be added"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <div className="flex justify-center">
              {" "}
              <Button title="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

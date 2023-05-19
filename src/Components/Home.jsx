import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { playlist } from "./DummyData/Playlist";
import Button from "../utils/Button";

const Home = () => {
  return (
    <div
      id="home"
      className="pt-16 pb-16 p-4 w-full md:h-screen bg-gray-300 bg-contain"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col gap-8 items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="pt-28 md:pt-4 md:p-0 text-4xl sm:text-7xl font-bold text-black">
            Make your party fun!
          </h2>
          <p className="text-black py-4 md:max-w-md">
            Create your own custom playlist today!.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-400 cursor-pointer"
            >
              Create Playlist
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <div className="bg-gray-500 p-8 h-fit rounded-sm">
            <h3 className="text-black mb-4 font-bold flex justify-center">Trending songs</h3>
            <ul>
              {playlist.map((playlist) => (
                <li key={playlist.id}>
                  <div className="bg-white mb-2 gap-2 p-1.5 flex m-auto justify-center rounded-md">
                    <div>{playlist.title}</div>
                    <div>+</div>
                  </div>
                </li>
              ))}
               <div className="flex justify-center">
              {" "}
              <Button title="View more" />
            </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

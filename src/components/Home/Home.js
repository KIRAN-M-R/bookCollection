import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative ">
      <Navbar />
      <div className="flex flex-row fixed bg-slate-800 h-screen top-14 left-0 right-0">
        <div className="flex flex-row w-3/4 bg-gray-600"></div>
        <div className="bg-green-600 w-1/4">
          {/*card start*/}
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          {/*card end*/}
        </div>
      </div>
    </div>
  );
};

export default Home;

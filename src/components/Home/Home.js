import React from "react";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import SearchBook from "../SearchBook/SearchBook";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative ">
      <Navbar />
      <div className="flex flex-row fixed bg-slate-800 h-screen top-14 left-0 right-0">
        <div className="flex flex-row w-3/4 bg-gray-600"></div>
        <div className="bg-green-600 w-1/4">
          <SearchBook />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;

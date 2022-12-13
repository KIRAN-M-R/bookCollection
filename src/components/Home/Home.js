import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import SearchBook from "../SearchBook/SearchBook";
import "./Home.css";
import Posts from "../Posts/Posts";

const Home = () => {
  //const [currentId, setCurrentId] = useState()
  const [state, setState] = useState({});
  const [newPost, setNewPost] = useState({});
  const [searchResults, setSearchResults] = useState();
  const updateSearchResults = (temp) => {
    setSearchResults(temp);
    console.log("tempeie" + JSON.stringify(temp));
    console.log(searchResults);
  };

const refreshPost = (refreshData)=>{
setNewPost(refreshData)
}

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);
  return (
    <div className="relative ">
      <Navbar />
      <div className="flex flex-row bg-slate-800 h-screen top-14 left-0 right-0 overflow-auto">
        <div className="flex flex-col h-screen w-3/4 bg-gray-600 mt-14">
          <Posts
            state={state}
            setState={setState}
            searchResults={searchResults}
            newPost={newPost}
          />
        </div>
        <div className="bg-green-600 w-1/4 mt-8 z-0">
          <SearchBook updateSearchResults={updateSearchResults} />
          <Form state={state} setState={setState} refreshPost={refreshPost} />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Post from "./Post/Post";
import { useState, useEffect } from "react";
import { getBooks } from "../../Api";

const Posts = ({ state, setState}) => {
  let postToPass;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getBooks()
      .then((response) => {
        console.log(response);
        const { data } = response;
        return data;
      })
      .then((data) => {
        setPosts(data);
        
        console.log(data);
      });
      
  }, []);

  return (
    <div class="flex flex-row">
      {posts.map((post) => (
        <div>
          <Post post={post} setState={setState} state={state} />
        </div>
      ))}
    </div>
  );
};

export default Posts;

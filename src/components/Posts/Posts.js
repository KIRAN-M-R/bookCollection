import React from "react";
import Post from "./Post/Post";
import { useState, useEffect } from "react";
import { getBooks } from "../../Api";

const Posts = ({ state, setState, searchResults, newPost}) => {
  //const [test, setTest] = useState([{bookName:'bookee', author: 'authee', price:200, genre: "genee", image:""}])
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
      
  }, [newPost]);
/* useEffect(()=>{
  if(newPost){
setPosts((p)
  }
},[newPost]) */

  return (<>
  {(!searchResults)?(<div className="flex flex-row">
  {posts.map((post) => (
    <div>
      <Post post={post} setState={setState} state={state} />
    </div>
  ))}
</div>):(<div className="flex flex-row">
{searchResults.map((post) => (
  <div>
    <Post post={post} setState={setState} state={state} />
  </div>
))}
</div>

)}
  </>
    
  );
};

export default Posts;

import React from 'react'
import Post from './Post/Post'
import { useState,useEffect } from 'react'
import { getBooks } from '../../Api'

const Posts = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getBooks().then((response)=>
        {console.log(response)
            const {data}=response
        return data}
        ).then((data)=>{
            setPosts(data)
            console.log(data)
        })
      
    
    }, [])
    
    
  return (
    <div class="flex flex-row">
        {posts.map((post)=>(
          <div >
            <Post post={post} />
          </div>
        ))}
    </div>
  )
}

export default Posts
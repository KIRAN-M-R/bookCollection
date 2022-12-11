import React, { useState, useEffect } from 'react'
import { addBook, updateBook } from '../../Api'
import FileBase from 'react-file-base64'
const Form = ({state, setState, refreshPost}) => {

    const [bookData, setBookData] = useState({
        bookName: '', author: '', price: '', genre: '', image: ''
    })
    const [currentId, setCurrentId] = useState()
    useEffect(()=>{
      setCurrentId(state._id)
      setBookData(state)
      
    },[state])

    const handleSubmit = async (e) => {
      e.preventDefault()
      if(!currentId){
        addBook(bookData).then(()=>{
          clear()
          console.log(bookData);
        })
        
      }else{
        console.log(bookData)
        updateBook(currentId, bookData).then((temp)=>{
          setBookData(temp)
          console.log(temp);
          setState(bookData)
          refreshPost(temp)
          clear()
        })
        
      }
        
        
    }
    const clear = ()=>{
      setCurrentId(null)
      setState({
        bookName: '', author: '', price: '', genre: '', image: ''
    })
      /* setBookData({
        bookName: '', author: '', price: '', genre: '', image: ''
    }) */
  }

  return (
    <div className="w-full max-w-xs">
      <h3>{currentId?"Edit the":"Add a"} Book</h3>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="bookname">
        Book Name
      </label>
      <input value={bookData.bookName} onChange={(e)=>setBookData({...bookData, bookName: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookname" type="text" placeholder="Book Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="author">
        Author
      </label>
      <input value={bookData.author} onChange={(e)=>setBookData({...bookData, author: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Author"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="price">
      Price
      </label>
      <input value={bookData.price} onChange={(e)=>setBookData({...bookData, price: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Price"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
        Genre
      </label>
      <input value={bookData.genre} onChange={(e)=>setBookData({...bookData, genre: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="genre" type="text" placeholder="Genre"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="image">
        Image
      </label>
      <FileBase type="file" multiple={false} onDone={({base64})=>setBookData({...bookData, image: base64})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" placeholder="Image"/>
    </div>
    
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        {currentId?'Edit':'Add'} Book
      </button>
      
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
  )
}

export default Form
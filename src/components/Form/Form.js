import React from 'react'

const Form = () => {
  return (
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="bookname">
        Book Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookname" type="text" placeholder="Book Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="author">
        Author
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Author"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="bookcode">
        Book Code
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookcode" type="text" placeholder="Book Code"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
        Genre
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="genre" type="text" placeholder="Genre"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="image">
        Image
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" placeholder="Image"/>
    </div>
    
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Post
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
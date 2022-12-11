import React, {useState} from 'react'
import { getBookBySearch } from '../../Api'
import {useNavigate} from 'react-router-dom'

const SearchBook = ({updateSearchResults}) => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
const handleSearch = (e)=> {
  e.preventDefault()
if(search){
  getBookBySearch(search).then((tempResult)=>{
    console.log(tempResult)
    console.log(tempResult?.data?.post)
    updateSearchResults(tempResult?.data?.post);
    
    navigate(`/books/search?searchQuery=${search}`)
  })



}else{
  navigate(`/books`)
}
}

  return (
    <div className="mt-10 flex justify-start">
  <div className="mb-3 xl:w-96">
    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <div className="flex flex-row w-80">
      <input onChange={(e)=>setSearch(e.target.value)} type="search" className=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
      
      <button onClick={handleSearch} className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>

      </div>
          </div>
  </div>
</div>
  )
}

export default SearchBook
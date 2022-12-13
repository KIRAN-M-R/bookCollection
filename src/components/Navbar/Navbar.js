import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleNavigate = ()=>{
    window.location.reload()
  }
  return (
    <div className="bg-stone-900 flex flex-row justify-between h-14 z-10 text-white fixed top-0 left-0 right-0">
      <button onClick={handleNavigate} className="pl-5 pt-3.5 text-2xl">Book Collections</button>
      
    </div>
  );
}

export default Navbar
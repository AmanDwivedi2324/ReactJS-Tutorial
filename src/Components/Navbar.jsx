import React from 'react'

const Navbar = () => {
    
  return (
    <>
   <nav className='nav flex items-center justify-between py-8 px-10 bg-emerald-500 ' >
        <div className="left  text-2xl ">
            <h1>ReactJS</h1>
        </div>
        <div className="right flex items-center gap-5 text-xl ">
            <h3>About Us</h3>
            <h3>Contact</h3>
            <h3>Section</h3>
            <h3>Account</h3>
        </div>
   </nav>
   </>
  )
  
}

export default Navbar
import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className='footer flex gap-10 bg-black py-5 px-5 mt-5 w-full h-[100px] rounded-lg flex justify-center items-center '>
        <div className="left text-white  text-2xl ">
            <h1>ReactJS</h1>
        </div>
        <div className="right text-white flex items-center gap-5 text-xl ">
            <h3>About Us</h3>
            <h3>Contact</h3>
            <h3>Section</h3>
            <h3>Account</h3>
        </div>
   </footer>
   </>
  )
}

export default Footer
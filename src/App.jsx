import React, { useState } from 'react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  
  let [number, setnumber] = useState(0);
  let [userName, setuserName] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Aman ");
    
  }

  const submitHandler2 = (e)=>{
    e.preventDefault();
    console.log(userName);
    setuserName("");
  }

  return (

    <>          

    <Navbar/>
    <br /><br /> 
    {/* <></> fragments are empty tags which are used to bind up the content that has to be return      */}

      <div className='incre'>
      <h1>Counter using ReactJs</h1>
      <br />
      <h3 className='para text-black-700 h-[50px] text-[35px]'>Number is {number}</h3>

      <button onClick={()=>{setnumber(number = number + 1);}} className='button1 text-white text-lg bg-black py-[10px] px-[5px] mt-2 mr-2 ml-2 rounded-md'>Increment</button>
      <button onClick={()=>{setnumber(number = number -1);}} className='button2 text-white text-lg bg-black py-[10px] px-[5px] mt-2 mr-2 ml-2 rounded-md' >Decrement</button>

      <br /><br />

      <h1 className='mt-10'>Form handling</h1>
      
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input className='input px-5 py-5 m-5 text-lg rounded-md bg-sky-200 border-red-200' type="text" placeholder='Enter your name'/>
        <button className='button px-5 py-5 m-5 text-lg rounded-md bg-slate-500'>Submit</button>
      </form>

      <br /><br />
      <h1>Two way binding</h1>


      <form onSubmit={(e)=>{
        submitHandler2(e);
      }}>

      <input onChange={(e)=>{
        // console.log(e.target.value)
        setuserName(e.target.value);
      }} className='input px-5 py-5 m-5 text-lg rounded-md bg-sky-200 border-red-200' value={userName} type="text" placeholder='Enter your name'/>
      <button className='button px-5 py-5 m-5 text-lg rounded-md bg-slate-500'>Submit</button>
      </form>
      <br />
      <Header/>

      <Footer />
    </div>

    </>


  )
}

export default App
import React, { useEffect } from 'react'
import { useState } from 'react';
import './Adminhome.css'
import axios from 'axios';
const Adminhome = () => {

  const [msg, setmsg] = useState("");
  const value=JSON.parse(localStorage.getItem("admin_token"));
console.log(value);
  const getName=async()=>{
    const res=await axios.get("http://localhost:4007/perfume/home",{
      headers:{Authorisation:`Bearer ${value}`},

    })
    setmsg(res.data.msg)
  }
  useEffect(()=>{
    getName();
  },[])


  return (
    <div>
    <div className="admin-name">
      <a href="">Back</a>
    <h3> admin:{msg}</h3>
    </div>

    <div className="hero">
      <div className="category">
        <h3>Categories</h3>
        <button>Add Category</button>
      </div>
      <div className="plane"></div>
    </div>


    
    </div>
  )
}

export default Adminhome

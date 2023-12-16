import React, { useEffect } from 'react'
import { useState } from 'react';
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
      admin:{msg}
    </div>
  )
}

export default Adminhome

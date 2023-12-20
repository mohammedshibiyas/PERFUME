import React, { useEffect } from 'react'
import { useState } from 'react';
import './Adminhome.css'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios';
const Adminhome = () => {
  // const {id}=useParams()
  const [getCat,setCat]=useState([])
  const getCategory=async()=>{
   const res= await axios.get("http://localhost:4007/perfume/getcategory")
    setCat(res.data)
  }
  useEffect(()=>{
    getCategory()
  },[])

 const delCategory=async(id)=>{
  // e.preventDefault();
  const res= await axios.delete(`http://localhost:4007/perfume/delcategory/${id}`)
  console.log(res.data);
  if(res.status!=404)
  {
    alert("category deleted")
  }
  else{
    alert("not deleted")
  }
  getCategory();
 } 

  const [msg, setmsg] = useState("");
  const value=JSON.parse(localStorage.getItem("admin_token"));
// console.log(value);
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
     <div className="main">
     <nav className="navbar">
        <div className="nav_icon" onclick="">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__left">
         
          <a className="active_link" href="#">Admin</a>
        </div>
        <div className="navbar__right">
          <a href="#">
            <i className="fa fa-power-off" aria-hidden="true" id="log"> <span> LOGOUT</span></i>
          </a>
         
          <a href="#">
            <img width="30" src="/avatar.svg" alt="" />
            {msg}
          </a>
        </div>
      </nav>

      <main>
        <div className="main__container">

           {/* <div className="main__title">
            <img src="assets/hello.svg" alt="" />
            <div className="main__greeting">
              <h1>Hello Codersbite</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>  */}

         
          <div className="main__cards">
          
          </div> 
         
          <div className="charts">
                     </div> 
        </div>
      </main>

      <div id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src="/ChanellogoPNGimage.png" alt="logo" />
            <h1>CHANEL</h1>
          </div>
         
        </div>

        <div className="sidebar__menu">
          <div className=" category-main  active_menu_link sidebar__linkk">
          <div className="cat-head">
            <i className=""></i>
            <h4>Categories</h4>
          </div>
          <Link to='/addcategory'> <button id='category-btn'> <i className="fa fa-plus" aria-hidden="true" id="plus"></i> </button>
          </Link>
          </div>

          <table className='category-table'>
         
            {
             getCat.map((data,index)=>
             
             <tr key={index} className='active_menu_link'>
             <th>{data.category}</th>
             <td className='tab-btns'>
            <Link to={`/editcategory/${data._id}`}><i class="fa fa-pencil-square-o" aria-hidden="true" id='edit'></i>
</Link>
           <Link to={`#${data._id}`} ><button onclick={()=>delCategory(data._id)}><i class="fa fa-trash" aria-hidden="true"></i>
           </button>
</Link>
             </td>
   
           </tr>
          //  onclick={()=>delCategory(data._id)}
             
             )
            }
   
            
           </table>
           {/* <h2>MNG</h2>
          <div className="sidebar__link ">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            <a href="#">Admin Management</a>
          </div> */}
          
      </div>
      </div>
     </div>
    
    </div>
  )
}

export default Adminhome

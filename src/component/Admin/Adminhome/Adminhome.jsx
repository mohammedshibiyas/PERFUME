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
    <div className="admin-name">
      <a href=""><i class="fa fa-arrow-left" aria-hidden="true"></i>  Back</a>
    <h3> <i class="fa fa-user-circle-o" aria-hidden="true"></i>
{msg}</h3>
    </div>

    <div className="hero">
      <div className="category">
        <h3>Categories</h3>
      <Link to='/addcategory'> <button id='category-btn'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Category</button>
</Link>
        <table className='category-table'>
         
         {
          getCat.map((data,index)=>
          
          <tr key={index}>
          <th>{data.category}</th>
          <td className='tab-btns'><button>EDIT</button>
          <Link to={`#${data._id}`}> <button onClick={()=>delCategory(data._id)}>DELETE</button></Link></td>

        </tr>
          
          )
         }

         
        </table>
      </div>
      <div className="products">
      <h3>Products</h3>
      <button id='category-btn'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Product</button>


      </div>
    </div>


    
    </div>
  )
}

export default Adminhome

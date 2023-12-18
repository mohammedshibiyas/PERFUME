import React, { useEffect } from 'react'
import { useState } from 'react';
import './Adminhome.css'
import { Link } from 'react-router-dom'

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
      <Link to='/addcategory'> <button id='category-btn'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Category</button>
</Link>
        <table className='category-table'>
          <tr>
            <th>cat 1</th>
            <td className='tab-btns'><button>EDIT</button> <button>DELETE</button></td>

          </tr>

          <tr>
            <th>cat 1</th>
            <td className='tab-btns'><button>EDIT</button> <button>DELETE</button></td>

          </tr>

          <tr>
            <th>cat 1</th>
            <td className='tab-btns'><button>EDIT</button> <button>DELETE</button></td>

          </tr>
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

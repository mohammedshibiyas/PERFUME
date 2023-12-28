import React, { useState } from 'react'
import './Logincustomer.scss'
import { Link, useNavigate } from 'react-router-dom'

const Logincustomer = () => {
    const navigate=useNavigate();
    const [val,setVal]=useState({
            email:"",
         password:""
    })

    const Getdata=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }

    const custLogin=async()=>{
        const res=await axios.post("")
    }
  return (
    <div>
      <div className="login-all">
        <div className="row">
            <div className="col-lg-8">
            {/* <div className="back">
              <Link to='/adminlogin'><button><i class="fa fa-arrow-left" aria-hidden="true"></i> back</button></Link>
            </div> */}
            <div className="main-image">
                <img src="/main2.jpg" alt="" />
            </div>
            </div>
            <div className="col-lg-4 login-content">
           
        <div className="head">
          <h6>Login here !</h6>
        </div>
        <div className="login">
          <div className="input-field">
          <input type="text" placeholder='Email' onChange={Getdata} />
          </div>

          <div className="input-field">
          <input type="password" placeholder='Password' onChange={Getdata} />
          </div>

         <div className="login-button">
         <Link className='login-btn'>Login</Link>
         <p id='already'>Don't have an acc? <Link className='log'>Register</Link></p>

         </div>



        </div>
            </div>
        </div>
 
      </div>
    </div>
  )
}

export default Logincustomer

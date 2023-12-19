import React, { useState } from 'react'
import './Addproduct.css'
import axios from 'axios'
import { useEffect } from 'react'

const Addproduct = () => {
	let Photo=""
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({
	name:"",
    category:"",
    description:"",
    price:"",
    photo:"",
    stock:""
  })
  const Getdata=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  const Upload=async(e)=>{
    e.preventDefault()
  
    Photo=await convertToBase64(e.target.files[0])
    console.log(Photo);
  }

  const getCategory=async()=>{
    const res=await axios.get("http://localhost:4007/perfume/getcategory")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(()=>{
    getCategory()
  },[])

  const addProduct=async(e)=>{
   try {
    e.preventDefault()
    const res=await axios.post("http://localhost:4007/perfume/addproduct",{...val,photo:Photo})
    console.log(res.data);
    if(res.status!=404){
      alert("Product Added")
    }
   } catch (error) {
      alert("error",error)
   }
  }
	  

  return (
    <div>
         <div class="container">
	
	<div class="modal_main">
		<div class="modal__header">
			<span class="modal__title">Add Product</span><button class="button button--icon"><svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
					<path fill="none" d="M0 0h24v24H0V0z"></path>
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></button>
		</div>
		<div class="modal__body">
			
			<div class="input">
								{/* <label class="input__label">Email</label> */}
                <input class="input__field" name='name' type="text" placeholder='product Name' onChange={Getdata} />
			</div>
           
            <div class="input">
				<select class="input__field" name='category' type="text" placeholder='Category'   onChange={Getdata} > 
				{
      getCat.map((data,index)=>
        <option value={data.category} key={index}>{data.category}</option>
     )}
      </select>
				
			</div>

			<div class="input">
				{/* <label class="input__label">Password</label> */}
				<input class="input__field" name='description' type="text" placeholder='description'   onChange={Getdata} /> 
			</div>

			<div class="input">
				{/* <label class="input__label">Password</label> */}
				<input class="input__field" name='price' type="text" placeholder='price'   onChange={Getdata} /> 
			</div>

			<div class="input">
				{/* <label class="input__label">Password</label> */}
				<input class="input__field" name='stock' type="text" placeholder='stock' onChange={Getdata} /> 
			</div>

			<div class="input">
				{/* <label class="input__label">Password</label> */}
				<input class="input__field" name='photo' type="file" placeholder='photo' onChange={Upload} /> 
			</div>

          
		</div>
		<div class="modal__footer">
			<button class="button button--primary" onClick={addProduct}>Add</button>
		</div>
	</div>
</div>
    </div>
  )
}

export default Addproduct

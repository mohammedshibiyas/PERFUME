import React, { useState } from 'react'
import './Addproduct.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Addproduct = () => {
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({
	name:"",
    category:"",
    description:"",
    price:"",
	stock:"",
    images:[],
	banner:""
   
  })
  const Getdata=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

 

  const getCategory=async()=>{
    const res=await axios.get("http://localhost:4007/perfume/getcategory")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(()=>{
    getCategory()
  },[])

  const addProduct = async (e) => {
		try {
			e.preventDefault()
			let formData = new FormData();
			console.log(Object.entries(val));
			Object.entries(val).forEach(item => formData.append(item[0], item[1]));
			if (val.images && val.images.length > 0) {
        console.log(val.images);
				for (const image of val.images) {
					formData.append('images', image);

				}
			}
			const res = await axios.post("http://localhost:4007/perfume/addProduct", formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (res.status != 404) {
				alert("Product Added")
			}
		} catch (error) {
			alert("error", error)
		}
	}


  return (
    <div>
       <div className="add-product">
	   <div class="container">
	
	<div class="modal_main">
		<div class="modal__header">
			<span class="modal__title">Add Product</span><Link to='/adminhome'><button class="button button--icon"><svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
					<path fill="none" d="M0 0h24v24H0V0z"></path>
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></button></Link>
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
				<input class="input__field" name='images' type="file" placeholder='photo' onChange={e => setVal(p => ({ ...p, [e.target.name]: e.target.files }))} multiple /> 
			</div>

			<div class="input">
				{/* <label class="input__label">banner</label> */}
				<input class="input__field" name='banner' type="file" placeholder='Banner' onChange={e => setVal(p => ({ ...p, [e.target.name]: e.target.files }))}  /> 
			</div>

          
		</div>
		<div class="modal__footer">
			<Link to='/adminhome'><button class="button button--primary" onClick={addProduct}>Add</button></Link>
		</div>
	</div>
</div>
	   </div>
    </div>
  )
}

export default Addproduct

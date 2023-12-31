import admin_schema from './model/admin.model.js'
import category_schema from './model/category.model.js'
import product_schema from './model/product.model.js'
import customer_schema from './model/customer.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
const {sign}=pkg



export async function addAdmin(req,res){

    try {
        const{username,phone,email,password}=req.body
        console.log(username,phone,email,password);

        if(!(username&&phone&&email&&password))
        return res.status(404).send("fields are empty")

        bcrypt.hash(password,10)
        .then((hashedpwd)=>{
            admin_schema.create({username,phone,email,password:hashedpwd})
        })
        .then(()=>{
            res.status(201).send("successfully registered")
        })
        .catch((error)=>{
            res.status(500).send(error)
        })

    } catch (error) {
        console.log(error);
    }

}

export async function adminLogin(req, res) {
    try {
     console.log(req.body);
     const { email, password } = req.body;
     const usr = await admin_schema.findOne({ email })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     const{username}=usr
     console.log("hai",usr);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(username);
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}

export async function home(req,res){
    try {
      console.log(req.user);

      const {username}=req.user
    //   console.log(username);
      res.status(200).send({msg:` ${username}`})
    res.end()
      
    } catch (error) {
      res.status(404).send(error)
      
    }
  
   }

   export async function adminFrgtPwd(req, res) {
    const phone = req.params.phone;
    // const updatedPassword = req.body.password;
    const{email,password}=req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    let task = await admin_schema.updateOne({ email }, { $set: { password: hashedPassword } });
    res.status(200).send(task);
}

// category

export async function addCategory(req,res){

    try {
        const { category, about } = req.body;
        console.log(category, about);
        if (!(category && about)) {
          return res.status(400).send("Fields are empty");
        }
        const task=await category_schema.create({ category, about });
    
        res.status(200).send(task);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }

}

export async function getCategory(req,res){ 
    let task=await category_schema.find()
    res.status(200).send(task)
}

export function delCategory(req,res)
{
    const{id}=req.params;
    const data=category_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function EditCategory(req, res) {
  const { id } = req.params;
  try {
      const updatedData = req.body;
      const value = await category_schema.updateOne({ _id: id }, { $set: updatedData });
      res.status(200).send(value);
  } catch (error) {
      res.status(404).send(error);
  }
}

export async function getfullcategory(req,res){
  const{id}=req.params;
  console.log(id);
  let task=await category_schema.findOne({_id:id})
  console.log(task);
  res.status(200).send(task)
}


// product

export async function AddProducts(req, res) {
  try {
    
    const { ...products} = req.body;
    const task=await product_schema.create({...products});
    console.log(task);
    res.status(200).send({result : task});
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
// export async function SetPath(req,res)
// {
//   let { filename } = req.params;
//   console.log(filename);
//   return res.sendFile(path.resolve(`./images/${filename}`))
// }

export async function getcategorywise(req,res){
 try {
  const {category}=req.params;
  const product=await product_schema.find({category:category});

  res.status(200).send(product)
 } catch (error) {
  res.status(500).send("internal server error")
 }
}

export async function delproduct(req,res){
  const{id}=req.params;
  const data=product_schema.deleteOne({_id:id})
  data.then((resp)=>{
      res.status(200).send(resp)
  }).catch((error)=>{
      res.status(404).send(error)
  })
}

export async function getProduct(req,res){
  const{id}=req.params
  console.log(id);
  const data=await product_schema.findOne({_id:id})
  console.log(data);
  res.status(200).send(data)
}
// customer

export async function addCustomer(req,res){
  const {password,...custDetails}=req.body
  const hashedpwd=await bcrypt.hash(password,10)
  customer_schema.create({...custDetails,password:hashedpwd})
   res.status(200).send("succesfully registered")

}
export async function loginCustomer(req,res){
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const usr = await customer_schema.findOne({ email })
    console.log("haii",usr);
    if (usr === null) return res.status(404).send("username or password doesnot exist");
    const success =await bcrypt.compare(password, usr.password)
    console.log(success);
    const{name,_id}=usr
    console.log("hai",usr);
    if (success !== true) return res.status(404).send("username or password doesnot exist");
    const token = await sign({ name,_id }, process.env.JWT_KEY, { expiresIn: "24h" })
    console.log(name);
    console.log(token);
    res.status(200).send({ msg: "successfullly login", token })
    res.end();
    
   } catch (error) {
    console.log(error,"internal server error"); 
}
}

export async function customerHome(req,res)
{
  try {
    console.log(req.user);
    

    const {name}=req.user
    console.log(name);
  //   console.log(username);
    res.status(200).send({msg:` ${name}`})
  res.end()
    
  } catch (error) {
    res.status(404).send(error)
    
  }
}
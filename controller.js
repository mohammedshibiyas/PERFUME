import admin_schema from './admin.model.js'
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
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ email }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}
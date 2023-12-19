import mongoose from "mongoose";

const product_schema=new mongoose.Schema({
    name:{type:String},
    category:{type:String},
    description:{type:String},
    price:{type:String},
    photo:{type:String},
    stock:{type:String}
})

export default mongoose.model.Product|| mongoose.model("product",product_schema)
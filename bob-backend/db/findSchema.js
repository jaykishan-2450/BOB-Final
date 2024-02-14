const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    key:String
});

module.exports=mongoose.model("recipes",userSchema)
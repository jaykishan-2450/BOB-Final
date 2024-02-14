const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    type:String,
    method:Array,
    user:String
});

module.exports=mongoose.model("addedrecipes",userSchema);
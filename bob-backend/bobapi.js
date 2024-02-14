const express = require("express");
require('./db/config.js');
const cors = require('cors')

const User = require('./db/user.js');
const Collection=require('./db/findSchema.js')
const userRecipes=require('./db/addrecipeSchema.js')

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);
})
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) resp.send(user);
        else { resp.send({err:"no user found"}) }
    }
    else{
        resp.send({err:"fill all the details to login"})
    }
})

app.get("/search/:key", async (req, resp) => {
    let data=req.params.key;
    console.log(data)
    let value=await Collection.find({
        "$or": [
            { Name: { $regex: data } },
            { Description: { $regex: data } },
             { Ingredients: { $regex: data } }
        ]
    })
    if (value) resp.send(value);
    else { resp.send({err:"no recipe found"}) }
    
})


app.post("/addrecipe",async (req,resp)=>{
    let recipe=new userRecipes(req.body);
    let result=await recipe.save();
    resp.send(result.toObject())
})
app.get("/myrecipes/:key",async (req,resp)=>{
    let value=await userRecipes.find({
        "$or":[
            {user:{$regex:req.params.key}}
        ]

    });
    if (value) resp.send(value);
    else { resp.send({err:"no recipe found"})}
})

app.listen(5000);
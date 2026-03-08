const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET=("rizwanullahwarr02@gmail.com");
const app=express();

app.use(express.json());

const users=[];

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password,
    })

    res.json({
        Message:"successfully sign up",
    })
    console.log(users);

    
  })


  app.post("/signin",function(req,res){
     
    const username=req.body.username;
    const password=req.body.password;

    let foundUser=null;

    if(foundUser.username==users.username&& foundUser.password==users.password)
    {
        
    }


  })
   









app.listen(3000);
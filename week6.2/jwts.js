const express=require("express");
const jwt=reqire("jsonwebtoken");

const JWT_SECRET="Rizwan123";


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
        message:"you are signed in"
    })

})

app.post("/singin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    let founduser=null;

    for(let i=0;i<users.length;i++){
        if(users(i).username===username && users[i]==password){
            founduser=users[i]
        }
    }
    if(!founduser){
        res.json({
            message:"credintals incorrect"

        })
        return
            
    }
    else{
        const toke=jwt.sign({
            username

        },JWT_SECRET);

        res.json({
        token:token,
        })
    }

})

app.get("/me",function(req,res){

})
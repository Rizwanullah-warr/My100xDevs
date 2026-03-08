const express=require('express');
const jwt=require('jsonwebtoken');
const JWT_SECRET="rizwanullahwarr02@gmail.com"


const app=express();

app.use(express.json());


const  users=[]







app.post("/signup",function(req,res){

    const username=req.body.username;
    const password=req.body.password;


    users.push({
        username:username,
        password:password,


    })

    res.json({
        message:"you are signed up"
    })

    console.log(users);


})

app.post("/signin",function(req,res){

    const username=req.body.username;
    const password=req.body.password;


    // const user=users.find(function(u){
    //     if(u.username==username){
    //         return true;
    //     }
    //     else{
    //         return false;

    //     }
    // })

    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username&& users[i].password==password){

            foundUser=users[i];
        }
    }

    if(foundUser){
        //const token=generateToken();
        //convert their username over to a jwt
        const token=  jwt.sign({ 
            username:username
        },JWT_SECRET);
        //foundUser.token=token;
        //we do not need to stored in memory varaible anymore


        res.json({
            token:token,
        })
       
    }
    else{
        res.status(403).send({

            message:"invalid username or password"

        })
    }


    console.log(users);

})


app.get("/me",function(req,res){
    const token=req.headers.token
    //but now wil send the jwt
    const decodeInformation=jwt.verify(token,JWT_SECRET);//here we decode the jwt in to username 
    const username=decodeInformation.username;


    let foundUser=null;

    for (let i=0; i<users.length;i++){
        if(users[i].username==username)
        {
            foundUser=users[i];
        }
    }

    //in the upper four lines before that we had the useranme
    //but now in this loop we want to access the password from db

    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
    else{
        res.json({
            message:"token invalid"
        })
    }
})

//you have watched video 1 hour and 11 sec


app.listen(3000);
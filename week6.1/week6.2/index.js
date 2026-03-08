const express=require('express');
const jwt=require('jsonwebtoken');
const JWT_SECRET="rizwanullahwarr02@gmail.com"


const app=express();

app.use(express.json());


const  users=[]


function logger(req,res,next){
    console.log(req.method+"request came");
    next();

}
//localhost 3000

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html");

})




app.post("/signup",logger,function(req,res){

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

app.post("/signin",logger,function(req,res){

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

function auth(req,res,next){

    const token=req.headers.token;
    const decodeInformation=jwt.verify(token,JWT_SECRET);
    if(decodeInformation.username){
        req.username=decodeInformation.username;
        next();

    }
    else{
        res.json({
            message:"you are not logged in"
        })
    }

}



app.get("/me",logger,auth,function(req,res){
    const token=req.headers.token
    //but now wil send the jwt
    const decodeInformation=jwt.verify(token,JWT_SECRET);//here we decode the jwt in to username 
    const username=decodeInformation.username;


    let foundUser=null;

    for (let i=0; i<users.length;i++){
        if(users[i].username==req.username)
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
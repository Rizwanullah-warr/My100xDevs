const express=require("express");
const jwt=require("jsonwebtoken");

const JWT_SECRET="Rizwan123";


const app=express();
app.use(express.json());

const users=[];


function Logger(req,res,next){
    console.log(req.method +"request came");
    next();
}

app.get("/",function(req,res,next){
    res.sendFile(__dirname+"/public/index.html");
    

})

app.post("/signup",Logger, function(req,res){
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

app.post("/signin",Logger,function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    let founduser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
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
        const token=jwt.sign({
            username

        },JWT_SECRET);

        res.json({
        token:token,
        })
    }
   


    console.log(users);

})


function auth(req,res,next){
    const token=req.headers.authorization;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username;
        next();
    }
    else{
        res.json({
            message:"you are not logged in"
        })
    }
}
app.get("/me",Logger,auth,function(req,res){
   

   

        for(let i=0;i<users.length;i++){
            if(users[i].username==req.username){
                founduser=users[i]
            }
        }
        res.json({
            username:founduser.username,
            password:founduser.password
        })
     }

)

app.listen(3006);
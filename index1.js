const express=require("express");
const app=express();

    let requestCount=0;


    function requestIncreaser(req,res,next){
    requestCount=requestCount+1;
    console.log("total number of request=+" +requestCount);
       // req.requestCount=requestCount;
       next();

    }


    function realSumhandler(req,res)
    {
        
    const a=parseInt(req.query.a);
    //this is the varible that we will access in brwoser
    const b=parseInt(req.query.b);
    res.json({
        answer:a+b,
    })

    }


app.get("/sum",requestIncreaser,realSumhandler)

app.get("/multiply",function(req,res){
    requestIncreaser();

    

    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    //the parseInt funtion is used to change the string in to the number

    res.json({
        answer:a*b,
    })

})

app.get("/sub/:a/:b",function(req,res){



    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    //the parseInt funtion is used to change the string in to the number

    res.json({
        answer:a-b,
    })

})



app.listen(4000);
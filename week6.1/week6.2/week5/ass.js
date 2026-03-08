const express = require("express");

const app = express();



 function requestLogger(req,res,next){
    const method=req.method;
    const url=req.url;
    console.log(req.method,req.url, `${new Date().toISOString()}`);
    next();

 }

 let requestCount=0;
function counterIncreaser(req,res,next){
    requestCount=requestCount+1;
    console.log("total number of requests"+requestCount);
    next();



}

app.use(counterIncreaser);
app.use(requestLogger);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.get("/request-count",function(req,res){
    res.json({
        totalRequests:requestCount,
    });
    
});

app.listen(3000);
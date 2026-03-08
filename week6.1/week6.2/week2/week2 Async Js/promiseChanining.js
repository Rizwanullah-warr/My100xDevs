function assynFunc1()
{
    return new Promise((resolve, reject)=>
{
                setTimeout(()=>{
                    console.log("Data1");
                    resolve("success");

                },4000);
});
}

function assynFunc2()
{
    return new Promise((resolve, reject)=>
{
                setTimeout(()=>{
                    console.log("Data2");
                    resolve("success");

                },4000);
});
}

console.log("fetching data1....");
assynFunc1().then((res)=>{
    console.log("fetching data 2")
    assynFunc2().then((res)=>{

    })
})


//promise cahinging mean that you are doing task that has the same taks
//first the fist task complete with the time frame then you do the onother task
//and another important thing that is chaning mean that you use one then inside another then 
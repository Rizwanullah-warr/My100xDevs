// let poromise=new Promise((resolve, reject)=>// resolve and  reject are callbacks that are provide by js
// {
//     console.log("i am promise"); 
//     resolve("successful ");
// }
// )


// const GetPromise =()=>{
//     new Promise((resolve, reject)=> {
//         console.log("i am a promise do you know ");
//         resolve("success");
//     })
// }

// let promise= GetPromise();
// Promise.then((val)=>{
//     console.log("promise fulfilled");
// });

const GetPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise do you know ");
    resolve("success");
  });
};

let promise = GetPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err)=>{
    console.log("rejeced",err);
});
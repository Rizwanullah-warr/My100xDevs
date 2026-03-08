/*const { resolve } = require("node:dns");

function waitFor3S(resolve)
{
    setTimeout(resolve,3000);
}

function setTimeoutPromisified(){
    return new Promise(waitFor3S);//one thing to be noted when you write pomise the first letter (P) must be capital other wise it will show an erro
    

}

function main(){
    console.log("Main is called");
}
setTimeoutPromisified().then(main);
*/

// //promie class says when a function is called insdie me
//  like waitFor3S there first arguemnt which is resolve will be passed
//  called when this called i will calle .then(main ) function

 

function random(resolve){
    setTimeout(resolve,3000);
}

let p= new Promise(random);
console.log(p);

function callback(){
    console.log("Promise succedee");
}
p.then(callback);
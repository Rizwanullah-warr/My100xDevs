// function sum(a,b){
//     console.log(a+b);
// }
function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
//calculator(1,2);
//when ever you call the callbakc fuction
// call it with its name and do not add parenthesis near to this like the other function calling
    

// we can do the upper syntax with arrow function as well

calculator(1,2,(a,b)=>{
    console.log(a+b);
}) ;
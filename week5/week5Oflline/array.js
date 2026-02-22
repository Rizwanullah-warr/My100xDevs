/*const input=[1,2,3,4,5]
const initialArray=[]
const newArray=[]
for(let i=0;i<input.length;i++){
 
    initialArray.push(input[i]*2);
    newArray.push(input[i]*3);
    
}

console.log(initialArray);
console.log(newArray);*/

/* another way to write it mean throug map
*/


// const input=[1,2,3,4,5];
// function transform(i){
//     return i*2;
// }

// const ans=input.map(transform);
// console.log(ans);

const input=[1,2,3,4,5];
const ans=input.map(function(i){
    return i*2;
});
  console.log(ans);

const result=input.map(i=>i*2);
console.log(result);

//creat a map fucntion that takes 2 inputs an
//ary and a trsnformation calbback/fn
//and transforms the array into a new one using the 
//transforamtion fn



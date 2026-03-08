//const numbers = [-5, 10, -3, 8, -1, 0, 7];


// const ans=numbers.filter((n)=>{
//     if(n>0)
//     {
//         return true;
//     }
// })

//second way by doing anynomys function 

// const ans=numbers.filter(function(n){
//     if(n>0)
//     {
//         return true;
//     }
// })


//3rd way by naming function

// function filterArray(n){
//     if(n>0){
//         return true;
//     }
// }

// const ans=numbers.filter(filterArray);
// console.log(ans);




//Medium quesiton Map
// const nums = [1, 2, 3, 4, 5];


// function square(n){
//     return n*n;
// }



// const ans=nums.map(function(n){
//     return Math.pow(n,2);
// })


// //const ans=nums.map(square);

// console.log(ans);

/////////////////////////////////////////////////////////////////////////////////////////////


//  Medium quesitons


// const people = [
//   { firstName: "John", lastName: "Doe", age: 17 },
//   { firstName: "Jane", lastName: "Smith", age: 22 },
//   { firstName: "Bob", lastName: "Johnson", age: 19 },
//   { firstName: "Alice", lastName: "Brown", age: 16 }
// ];
// 

// function adult(person){
//     if(person.age>18){
//         return person.age;
//     }
// }

// function lastName(person){
//     return person.firstName+"  "+ person.lastName;
// }


// const answer=people.filter(adult);
// const fullname=answer.map(lastName);


//by doing another way

// const fullname=people.filter(adult)
//             people.map(lastName);


//you can do it as well by arrow function
// const fullname=people
//                     .filter(person=> person.age>=18)
//                     .map(person=> person.firstName+" "+person.lastName);


// console.log(fullname);



/////////////////////////////////////////////////////
//       hard part

// You have a cart of items. Apply these rules:
// 1. Filter out any items that are out of stock
// 2. Apply a 10% discount to items that cost more than $100
// 3. Return an array of objects with the item name and final price after discount

const cart = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
  { name: "Keyboard", price: 150, inStock: true },
  { name: "USB Cable", price: 15, inStock: true }
];

// Expected output: [
//   { name: "Laptop", finalPrice: 1080 },  // 1200 - 10% = 1080
//   { name: "Mouse", finalPrice: 25 },      // no discount
//   { name: "Keyboard", finalPrice: 135 },   // 150 - 10% = 135
//   { name: "USB Cable", finalPrice: 15 }    // no discount
// ]


const stock=cart.filter(function (item){
    return item.inStock;
})

const discount=stock.map(function (item){

    let finalPrice;
    if(item.price>100){
        finalPrice= item.price*0.9
      
    }
    else{
        finalPrice= item.price;
    }

    return {
        name: item.name,
        finalPrice:finalPrice,
    }
})

console.log(discount);




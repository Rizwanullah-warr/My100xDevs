/*let user={
    name:"rizwan",
    age:19,
    class:12

};
console.log("rizwan age ="+user.age);
console.log(user);*/



/*

let arr=["harkirat ",21,{
    name:"harkirat",age:18,gender:"male",
    cities:["delhi","kabul","kunar",{
        country:"afghanistan",
        city:"jalalabad"
    }]
}];
 function age_finder( arr){
    if(age===18 && gender==="male")
    {
        console.log(age);
        console.log(gender)
    }





 }


//console.log(arr[2].cities[3].country);

*/
/*
function Get(arr){
    for (i=0;i<arr.length;i++)
    {
    if(arr[i].age>18 && arr[i].gender=="male")
    {
    
    console.log(arr[i]);
    }
    }
    
    }
    
    const users=[{
    Name:"Anon1",
    age:18,
    gender:"male"
    },
    {
    Name:"Anon2",
    age:43,
    gender:"female"
    },
    {
    Name:"Anon3",
    age:34,
    gender:"male"
    }
    ]
    
    Get(users);

    */

    //write a function that take the user as input and greet them with their name and age

/*
    const user={
        age:19,
        name:"ali"
    };
    
    function greet(user)
    {

        if (user.age>18)
        (
        console.log("hello",user.age+user.name);
        )

    }


    greet(user);

   */
  //write a function that take array as an input and return only the even value as output

  const arr=[1,2,3,4,5,6,7,8,9,10];

  const even_numbers=arr.filter(num=>num%2===0)
  console.log(even_numbers);


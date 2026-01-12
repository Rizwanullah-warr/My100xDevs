

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

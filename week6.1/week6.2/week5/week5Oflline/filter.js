const arr=[1,2,3,4,5]
/*function filterLogic(n)
{
    if(n%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}

const ans=arr.filter(filterLogic);
*/

//this is the another way of doing it this is the best way than upper
/*
const ans=arr.filter(function (n)
{
    if(n%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
)
*/


const ans=arr.filter( (n)=>
{
    if(n%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
)





console.log(ans);
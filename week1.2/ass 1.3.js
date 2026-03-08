/*unction convote()
{
    let age=16;
    if(age>18)
    {
        console.log("true") ;
    }
    else
    {
        console.log("false") ;
    }
}
convote();
*/
  
function sum() {
    let num = 0; // Initialize num to 0
    for (let i = 1; i <= 5; i++) {
      num = num + i; // Add i to num
      console.log(num); // Print the current value of num
    }
    return num; // Return the final sum
  }
  
  const result = sum(); // Call the function and store the result
  console.log("Final result:", result); // Print the final result
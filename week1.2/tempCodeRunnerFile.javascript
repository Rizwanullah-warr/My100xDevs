console.log("Script is running!");

function sum() {
  let num = 0;
  for (let i = 1; i <= 5; i++) {
    num = num + i;
    console.log(num);
  }
  return num;
}

const result = sum();
console.log("Final result:", result);
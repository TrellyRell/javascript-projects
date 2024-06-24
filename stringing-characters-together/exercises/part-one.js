// let num = 1001;
let num = 100.11;
//Returns 'undefined'.
// console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
// let nums1 = (String(num)).length
// console.log(nums1);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let nums1 = (String(num)).replace().length
console.log(nums1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes(".")){
    console.log(String(num).length-1)
}else {
    console.log(String(num).length)
}
// function cal(a,b){
//     return 0
// }
// var a=10
// var b=15

// console.log(cal(a,b))
// var a=10
// var b=25
// if(a>5){
//     if(b<23){
//         console.log("correct")
//     }
// }
// else 
// {
//  console.log("Incorrect")   
// }
//var a=20;
const inpt= require('readline');
const r=inpt.createInterface({
    input: process.stdin,
    output: process.stdout}
)
r.question("",(num)=>{
console.log(num*num);
r.close()}) ;
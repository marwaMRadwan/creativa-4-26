// loops
// while
// let x = 1, sum = 0
// while(x<=10){
//     sum += x
//     ++x
// }

// let ch = prompt("enter value")
// while(ch != 0){

//     ch=prompt("")
// }

// do{
//     ch = prompt("")
// }while(ch != 0)

// for
// let z = 1
// for(let z = 1; z <= 10; z++){
    // console.log(z);
    // z+=10
// }
// console.log(z)
// for(let i=1; i<3; i++)
//     for(let j=1; j<3 ; j++)
//         console.log(i , " * ", j , " = ", i*j)

// console.log(i,j)

// foreach for of for in

// arrays
// let a = [1, "hello", false, 1.5, ""]
// a[0] ="jhdj"
// for(let index = 0; index < a.length ; index++){
//     console.log(a[index])
// }

// let ch, myChoices = []
// do{
//     ch = +prompt("enter your choice 0 for exit")
    // console.log(Number.isNaN(ch))
    // console.log(ch)
    // 0   false || false 
    //nan true || true
//     if(ch != 0 && !Number.isNaN(ch)) myChoices.push(ch)
// }while(ch!=0)

// for(let i=0 ; i< myChoices.length; i++){
//     console.log(`your ${i+1} is ${myChoices[i]}`)
// }
// console.log(myChoices)
    // objects



// let choice, invalid = [], valid=[]
// do{
//     choice = prompt("enter val")
//     // Number(choice)  choice*1.0   +choice (int)choice
//     if(choice == 0) { }
//     else if(Number.isNaN(+choice)) invalid.push(choice)
//     else valid.push(+choice)

// }while(choice!=0)

// console.log(valid);
// console.log(invalid);


let arr = [1,2,3]
arr.push(4)
console.log(arr);
arr.unshift(2)
console.log(arr);
let z = arr.pop()
console.log(arr, z)
z = arr.shift()
console.log(arr, z)
console.log(arr.length)
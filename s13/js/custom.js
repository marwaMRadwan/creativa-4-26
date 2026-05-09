// functions
//one function do one function

// function x(){
//     let z = 6+4
//     console.log("hello")
//     return z
// }
//  x()
//anynoums
// const x = function(){
//     console.log("test")
// }

// x()
// let user = {
//     name: "marwa",
//     age: 40,
//     showData : function(){
//         console.log(this)
//     },
//     printMe: ()=>{
//         console.log(this) // global window
//     }
// }

// user.showData()
// user.printMe()

// x=3

// const y = () =>{
//     return 5+3
// }
// const y = (a,b) => a+b
// console.log(y(2,9))


// (function(x,y){
//     console.log(x+y)
// })(5,2)

// const myFun = function(a=0, b=0) {
//     console.log(a, b)
// }

// myFun(5)
// ...v
// const add = function(v){
//     let res = 0
//     for(let i =0; i<v.length; i++) res+=v[i]
//     return res
    // console.log(val)
//}


// add(2,3)
// add(1,5,6)
// add(1,5,6,9,7,2,3,6)

// let count = prompt("enter count of values"), vals = []
// for(let i=1; i<=count; i++){
//     vals.push(+prompt("enter count of values"))
// }
// console.log(vals)
// console.log(add(vals))

// let data = [1,2,3]
// let user = {
//     x: 1,
//     y: "abc"
// }
// let x = 1
// console.log(user["x"])  // user.x


// let data = [
// {
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: {
// street: "Kulas Light",
// suite: "Apt. 556",
// city: "Gwenborough",
// zipcode: "92998-3874",
// geo: {
// lat: "-37.3159",
// lng: "81.1496"
// }
// },
// phone: "1-770-736-8031 x56442",
// website: "hildegard.org",
// company: {
// name: "Romaguera-Crona",
// catchPhrase: "Multi-layered client-server neural-net",
// bs: "harness real-time e-markets"
// }
// },
// {
// id: 2,
// name: "Ervin Howell",
// username: "Antonette",
// email: "Shanna@melissa.tv",
// address: {
// street: "Victor Plains",
// suite: "Suite 879",
// city: "Wisokyburgh",
// zipcode: "90566-7771",
// geo: {
// lat: "-43.9509",
// lng: "-34.4618"
// }
// },
// phone: "010-692-6593 x09125",
// website: "anastasia.net",
// company: {
// name: "Deckow-Crist",
// catchPhrase: "Proactive didactic contingency",
// bs: "synergize scalable supply-chains"
// }
// },
// {
// id: 3,
// name: "Clementine Bauch",
// username: "Samantha",
// email: "Nathan@yesenia.net",
// address: {
// street: "Douglas Extension",
// suite: "Suite 847",
// city: "McKenziehaven",
// zipcode: "59590-4157",
// geo: {
// lat: "-68.6102",
// lng: "-47.0653"
// }
// },
// phone: "1-463-123-4447",
// website: "ramiro.info",
// company: {
// name: "Romaguera-Jacobson",
// catchPhrase: "Face to face bifurcated interface",
// bs: "e-enable strategic applications"
// }
// },
// {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//         street: "Hoeger Mall",
//         suite: "Apt. 692",
//         city: "South Elvis",
//         zipcode: "53919-4257",
//         geo: {
//             lat: "29.4572",
//             lng: "-164.2990"
//         }
//     },
//     d: [1,2,3],
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//         name: "Robel-Corkery",
//         catchPhrase: "Multi-tiered zero tolerance productivity",
//         bs: "transition cutting-edge web services"
//     }
// },
// {
// id: 5,
// name: "Chelsey Dietrich",
// username: "Kamren",
// email: "Lucio_Hettinger@annie.ca",
// address: {
// street: "Skiles Walks",
// suite: "Suite 351",
// city: "Roscoeview",
// zipcode: "33263",
// geo: {
// lat: "-31.8129",
// lng: "62.5342"
// }
// },
// phone: "(254)954-1289",
// website: "demarco.info",
// company: {
// name: "Keebler LLC",
// catchPhrase: "User-centric fault-tolerant solution",
// bs: "revolutionize end-to-end systems"
// }
// },
// {
// id: 6,
// name: "Mrs. Dennis Schulist",
// username: "Leopoldo_Corkery",
// email: "Karley_Dach@jasper.info",
// address: {
// street: "Norberto Crossing",
// suite: "Apt. 950",
// city: "South Christy",
// zipcode: "23505-1337",
// geo: {
// lat: "-71.4197",
// lng: "71.7478"
// }
// },
// phone: "1-477-935-8478 x6430",
// website: "ola.org",
// company: {
// name: "Considine-Lockman",
// catchPhrase: "Synchronised bottom-line interface",
// bs: "e-enable innovative applications"
// }
// },
// {
// id: 7,
// name: "Kurtis Weissnat",
// username: "Elwyn.Skiles",
// email: "Telly.Hoeger@billy.biz",
// address: {
// street: "Rex Trail",
// suite: "Suite 280",
// city: "Howemouth",
// zipcode: "58804-1099",
// geo: {
// lat: "24.8918",
// lng: "21.8984"
// }
// },
// phone: "210.067.6132",
// website: "elvis.io",
// company: {
// name: "Johns Group",
// catchPhrase: "Configurable multimedia task-force",
// bs: "generate enterprise e-tailers"
// }
// },
// {
// id: 8,
// name: "Nicholas Runolfsdottir V",
// username: "Maxime_Nienow",
// email: "Sherwood@rosamond.me",
// address: {
// street: "Ellsworth Summit",
// suite: "Suite 729",
// city: "Aliyaview",
// zipcode: "45169",
// geo: {
// lat: "-14.3990",
// lng: "-120.7677"
// }
// },
// phone: "586.493.6943 x140",
// website: "jacynthe.com",
// company: {
// name: "Abernathy Group",
// catchPhrase: "Implemented secondary concept",
// bs: "e-enable extensible e-tailers"
// }
// },
// {
// id: 9,
// name: "Glenna Reichert",
// username: "Delphine",
// email: "Chaim_McDermott@dana.io",
// address: {
// street: "Dayna Park",
// suite: "Suite 449",
// city: "Bartholomebury",
// zipcode: "76495-3109",
// geo: {
// lat: "24.6463",
// lng: "-168.8889"
// }
// },
// phone: "(775)976-6794 x41206",
// website: "conrad.com",
// company: {
// name: "Yost and Sons",
// catchPhrase: "Switchable contextually-based project",
// bs: "aggregate real-time technologies"
// }
// },
// {
// id: 10,
// name: "Clementina DuBuque",
// username: "Moriah.Stanton",
// email: "Rey.Padberg@karina.biz",
// address: {
// street: "Kattie Turnpike",
// suite: "Suite 198",
// city: "Lebsackbury",
// zipcode: "31428-2261",
// geo: {
// lat: "-38.2386",
// lng: "57.2232"
// }
// },
// phone: "024-648-3804",
// website: "ambrose.net",
// company: {
// name: "Hoeger LLC",
// catchPhrase: "Centralized empowering task-force",
// bs: "target end-to-end models"
// }
// }
// ]

// let invoices = [
//     {
//         num: "#0001",
//         owner: "ahmed hassan",
//         total : 100000
//     },
//     {
//         owner: "mohamed ahmed", 
//         total: 20000,
//         num: "#0002"
//     },
//     {
//         num: "#0001",
//         owner: "ahmed hassan",
//         total : 100000
//     },
//     {
//         owner: "mohamed ahmed", 
//         total: 20000,
//         num: "#0002"
//     },
//     {
//         num: "#0001",
//         owner: "ahmed hassan",
//         total : 100000
//     },
//     {
//         owner: "mohamed ahmed", 
//         total: 20000,
//         num: "#0002"
//     },
// ]

// invoices.forEach( function(inv, index, a) {
//     console.log(`${index} - number: ${inv.num} - ${a
//     }`)
// } )

// let d = document.getElementById("one")
// console.log(d)
// console.log(d.textContent)
// console.log(d.innerText)
// console.log(d.innerHTML)
// d.textContent = "<h1>hi from js</h1>"
// // d.innerText = "hi from js"
// d.innerHTML = "<h1>hi from js</h1>"
// // d.className ="text-primary h3 "
// d.classList.add("text-primary")
// d.classList.remove("text-primary")
// d.classList.toggle("x")


// let btn = document.getElementById("showHide")
// let d = document.getElementById("data")
// btn.addEventListener("click", function(){
    // console.log("test")
    // d.classList.toggle("d-none")
    // btn.textContent=="show"? btn.textContent="hide" : btn.textContent="show"
//     if(btn.textContent=="show"){
//         btn.textContent="hide"
//         btn.className="btn btn-danger"
//     }
//     else{
//         btn.textContent="show"
//         btn.className="btn btn-success"
//     }
// })

// let divs = document.getElementsByTagName("div")
// let claasses = ["alert alert-danger p-3", "alert alert-primary p-3", "alert alert-success p-3"]


// for(let i =0; i<divs.length;i++){
//     divs[i].className = claasses[i]
// }
// let d = document.querySelector("div")

let headers = document.querySelectorAll(".header")
let content = document.querySelectorAll(".content")

headers.forEach((h, i)=>{
    h.addEventListener("click", function(){
        content.forEach((c, i)=> c.classList.add("d-none"))
        // console.log(this, i)
        // console.log(this.nextElementSibling)
        // h.nextElementSibling.classList.toggle("d-none")
        content[i].classList.toggle("d-none")
    })
})
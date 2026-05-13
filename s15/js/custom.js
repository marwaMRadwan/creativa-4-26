// const formInputs = ["email","password", "address","address2", "city","state", "zipcode"]

// const myForm = document.querySelector("#myForm")

// myForm.addEventListener("submit", (e)=>{
//     e.preventDefault()
    // console.log(myForm["email"].value)
    // console.log(this)
    // console.log(e.target)
    // const data = {}
    // formInputs.forEach(fInput =>{
    //     // console.log(fInput, " => " , myForm[fInput].value)
    //     data[fInput] = myForm[fInput].value
    // })
    // console.log(data)
    // console.log(validateEmail(data.email))
    // if(!validateEmail(data.email)){
    //     console.log("test")
    //     myForm["email"].classList.add("border-danger")
        // myForm.email.nextElementSibling.className = "alert alert-danger"
        // myForm.email.nextElementSibling.textContent = "Inavalid email"
//         myForm.email.nextElementSibling.classList.remove("d-none")
//     }

//     myForm["password"].classList.add("border-danger")
//     } 
// })

// const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const isValid = emailRegex.test(email);
//     if (isValid) return true
//     return false

// }

const users = [
  { "id": 1, "name": "Alice Johnson", "age": 28, "email": "alice.johnson@example.com" },
  { "id": 2, "name": "Bob Smith", "age": 34, "email": "bob.smith@example.com" },
//   { "id": 3, "name": "Charlie Lee", "age": 22, "email": "charlie.lee@example.com" },
//   { "id": 4, "name": "Diana King", "age": 29, "email": "diana.king@example.com" },
//   { "id": 5, "name": "Ethan Wright", "age": 31, "email": "ethan.wright@example.com" },
//   { "id": 6, "name": "Fiona Green", "age": 27, "email": "fiona.green@example.com" },
//   { "id": 7, "name": "George Brown", "age": 40, "email": "george.brown@example.com" },
//   { "id": 8, "name": "Hannah Davis", "age": 25, "email": "hannah.davis@example.com" },
//   { "id": 9, "name": "Ian Clark", "age": 33, "email": "ian.clark@example.com" },
//   { "id": 10, "name": "Julia Adams", "age": 30, "email": "julia.adams@example.com" },
//   { "id": 11, "name": "Kevin Harris", "age": 26, "email": "kevin.harris@example.com" },
//   { "id": 12, "name": "Laura Scott", "age": 35, "email": "laura.scott@example.com" },
//   { "id": 13, "name": "Michael Turner", "age": 32, "email": "michael.turner@example.com" },
//   { "id": 14, "name": "Natalie Evans", "age": 24, "email": "natalie.evans@example.com" },
//   { "id": 15, "name": "Oscar Perez", "age": 38, "email": "oscar.perez@example.com" },
//   { "id": 16, "name": "Paula Reed", "age": 29, "email": "paula.reed@example.com" },
//   { "id": 17, "name": "Quentin Brooks", "age": 36, "email": "quentin.brooks@example.com" },
//   { "id": 18, "name": "Rachel Foster", "age": 28, "email": "rachel.foster@example.com" },
//   { "id": 19, "name": "Samuel Carter", "age": 41, "email": "samuel.carter@example.com" },
//   { "id": 20, "name": "Tina Mitchell", "age": 23, "email": "tina.mitchell@example.com" }
]
const drawAllUsers = (users) =>{
    usersWrap.innerHTML = ""
    users.forEach((user, i, a)=>{
        const tr = document.createElement("tr")
        usersWrap.appendChild(tr)
        let td = document.createElement("td")
        td.innerText = user.id
        tr.appendChild(td)
        td = document.createElement("td")
        td.innerText = user.name
        tr.appendChild(td)
        td = document.createElement("td")
        td.innerText = user.age
        tr.appendChild(td)
        td = document.createElement("td")
        td.innerText = user.email
        tr.appendChild(td)
    })
}
const usersWrap = document.querySelector("#usersWrap")
const searchKey = document.querySelector("#search")
drawAllUsers(users)
searchKey.addEventListener("input", function(){
    let result = users.filter(u => {
        return u.name.toLowerCase().includes(searchKey.value.toLowerCase())
    })
    drawAllUsers(result)
})
// let sen = "hi all from js K"
// searchKey.addEventListener("input", function(){
    // console.log(searchKey.value)
    // console.log(sen.toLowerCase().includes(searchKey.value.toLowerCase()))
// })

//find findindex filter

// let testArr = [1,2,3,4,5,6,7,8,9,10]

// let result = testArr.filter(val=>{
//     return val>15
// })
// console.log(result)



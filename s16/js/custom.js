// localStorage.setItem("x", "test")
// console.log(localStorage.getItem("x"))
// localStorage.removeItem("x")

// let a = [{id:1, age:10},{id:1, age:10},{id:1, age:10},]
// localStorage.setItem("test", JSON.stringify(a))
// let result = JSON.parse(localStorage.getItem("test"))
// console.log(result)
// console.log(typeof result)
// let result = JSON.parse(localStorage.getItem("bghsch"))
// console.log(typeof result)
// let data = JSON.parse(localStorage.getItem("users"))
// data.push({})

// let x = "hello"
// let result
// try{
//     result = JSON.parse(x)
// }
// catch(e){
//     // console.log(e.message)
//     result = []
// }
// console.log(result)

const users = { "id": 2, "name": "Bob Smith", "age": 34, "email": "bob.smith@example.com" }
// console.log(typeof users);


// localStorage.setItem("users", JSON.stringify(users))
// let data = JSON.parse(localStorage.getItem("users"))
// data.push({ "id": 2, "name": "Bob Smith", "age": 34, "email": "bob.smith@example.com" })


// const getArrayFromStorage = (myKey, dType) => {
//     let data 
//     try{
//         data = JSON.parse(localStorage.getItem("users"))
//         if(!Array.isArray(data) && dType =="arr") 
//             throw new Error("test")
//         else if(dType == "obj"&& !data)
//             throw new Error("gjvhg")
//         else throw new Error("hjhk")
//     }
//     catch(err){
//         data = []
//     }
//     return data
// }

// (
//     () => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// }
// )()


/*
required length mail url filetype  password strength phone
*/

let startWithEgy = (txt) => {
    if(txt.startsWith("010")||txt.startsWith("012")||txt.startsWith("015")||txt.startsWith("011")|| txt.startsWith("+2010") )
        return true
    return false
}

const onlyNumbers = (str) => /^\d+$/.test(str);

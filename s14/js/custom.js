// const addBtn = document.querySelector("#addBtn")
// const data = document.querySelector("#data")
// let i = 0
// addBtn.addEventListener("mouseover", (e)=>{
//     // console.log(e.target)
//     // console.log(this)
//     // console.log(addBtn)
//     i++
//     // console.log(i)
//     let p = document.createElement("p")
//     p.innerText = i
//     p.className = "col-auto m-2 bg-success text-white p-2 "
//     data.appendChild(p)
// })

// const data = [
// {
// albumId: 1,
// id: 1,
// title: "accusamus beatae ad facilis cum similique qui sunt",
// url: "https://via.placeholder.com/600/92c952",
// thumbnailUrl: "https://via.placeholder.com/150/92c952"
// },
// {
// albumId: 1,
// id: 2,
// title: "reprehenderit est deserunt velit ipsam",
// url: "https://via.placeholder.com/600/771796",
// thumbnailUrl: "https://via.placeholder.com/150/771796"
// },
// {
// albumId: 1,
// id: 3,
// title: "officia porro iure quia iusto qui ipsa ut modi",
// url: "https://via.placeholder.com/600/24f355",
// thumbnailUrl: "https://via.placeholder.com/150/24f355"
// },
// {
// albumId: 1,
// id: 4,
// title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
// url: "https://via.placeholder.com/600/d32776",
// thumbnailUrl: "https://via.placeholder.com/150/d32776"
// },
// {
// albumId: 1,
// id: 5,
// title: "natus nisi omnis corporis facere molestiae rerum in",
// url: "https://via.placeholder.com/600/f66b97",
// thumbnailUrl: "https://via.placeholder.com/150/f66b97"
// },
// {
// albumId: 1,
// id: 6,
// title: "accusamus ea aliquid et amet sequi nemo",
// url: "https://via.placeholder.com/600/56a8c2",
// thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
// },
// {
// albumId: 1,
// id: 7,
// title: "officia delectus consequatur vero aut veniam explicabo molestias",
// url: "https://via.placeholder.com/600/b0f7cc",
// thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
// },
// {
// albumId: 1,
// id: 8,
// title: "aut porro officiis laborum odit ea laudantium corporis",
// url: "https://via.placeholder.com/600/54176f",
// thumbnailUrl: "https://via.placeholder.com/150/54176f"
// },
// {
// albumId: 1,
// id: 9,
// title: "qui eius qui autem sed",
// url: "https://via.placeholder.com/600/51aa97",
// thumbnailUrl: "https://via.placeholder.com/150/51aa97"
// },
// {
// albumId: 1,
// id: 10,
// title: "beatae et provident et ut vel",
// url: "https://via.placeholder.com/600/810b14",
// thumbnailUrl: "https://via.placeholder.com/150/810b14"
// }
// ]

// const dataWrap = document.querySelector("#dataWrap")
// const createCustomElement = (parent, newEle, classes, txt, attrs) =>{
//     const ele = document.createElement(newEle)
//     parent.appendChild(ele)
//     if(classes) ele.className = classes
//     if(txt) ele.textContent = txt
//     if(attrs){
//         attrs.forEach(a=> ele.setAttribute(a.attrName, a.attrVal))
//     }
//     return ele
// }
// data.forEach(ele => {
//     let div = createCustomElement(dataWrap, "div", "col-3 border border-2 border-success p-0")
//     let img_attrs = [
//         {attrName: "src", attrVal: ele.thumbnailUrl},
//         {attrName: "idx", attrVal: "x"}
//         ]
//     createCustomElement(div, "img", "img-fluid", null, img_attrs)
//     createCustomElement(div, "h3", "h5 text-success p-3", ele.title)
    // const div = document.createElement("div")
    // div.className = "col-3 border border-2 border-success p-0"
    // dataWrap.appendChild(div)
    
    // const img = document.createElement("img")
    // div.appendChild(img)
    // img.className = "img-fluid"
    // img.setAttribute("src", ele.url)
    // img.setAttribute("id", "x")

    // const h3 = document.createElement("h3")
    // h3.textContent=ele.title
    // h3.className ="h5 text-success p-3"
    // div.appendChild(h3)
// })

const fields = ["userName", "phone", "email"]
const myForm = document.querySelector("#myForm")
myForm.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(myForm["userName"].value)
    let user = {
        id: Date.now()
    }
    fields.forEach(f=> {
        // console.log(myForm[f].value)
        user[f] = myForm[f].value
    })
    console.log(user)
    drawUser(user)
    // myForm.reset()
})

const createCustomElement = (parent, newEle, classes, txt, attrs) =>{
    const ele = document.createElement(newEle)
    parent.appendChild(ele)
    if(classes) ele.className = classes
    if(txt) ele.textContent = txt
    if(attrs){
        attrs.forEach(a=> ele.setAttribute(a.attrName, a.attrVal))
    }
    return ele
}
const show = document.querySelector("#show")
const drawUser = (data) =>{
    let div = createCustomElement(show, "div", "col-4 p-2")
    div = createCustomElement(div, "div", "border border-3 rounded-3 p-3 border-success")
    fields.forEach(f => createCustomElement(div, "p", null,data[f]))
    let b = createCustomElement(div, "button", "btn btn-info", "edit")
    b.addEventListener("click", function(){
    fields.forEach(f => myForm[f].value = data[f])
    })
}
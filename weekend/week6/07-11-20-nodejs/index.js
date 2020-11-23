// const os = require("os");
const fs = require("fs");
// const { ifError } = require("assert");
// console.log(os.platform())
// console.log(os.release())

// fs.readFile("C:\\users\\SRAVANTHI\\Documents\\GUVI_PRACTICE\\GUVI_LEARNING\\guvi_learning\\zen_tasks\\weekend\\week6\\07-11-20-nodejs\\package.json",
// "utf-8",
// (err,data)=>{
// if(err) throw err;
// console.log(data)
// });

// let info = "sample file to create"
// fs.writeFile("sample text",info,(err)=>{
//     if(err) throw err;
//     console.log("content is written in the file");
// })

/* const {add,sub} = require('./my-custom-package/add');
let res = add(34,77);
let result = sub(78,56)
console.log(result); */

/* const fs = require("fs")
fs.readdir("c:\\users\\SRAVANTHI\\Documents",
"utf-8",
(err,data)=>{
    if(err)throw err;
    data.forEach(ele=>{
        console.log(ele)
    })
})
 */




 const express = require('express')
 const app = express()
 app.listen(3000,()=>console.log("your app is runninig with server"))
 app.get('/home',(request,response) =>{
    response.send("hello there. it is simple homes router")
 })

 app.get("/list",(request,response)=>{
    fs.readdir("C:/Users/SRAVANTHI/Documents","utf-8",(err,data)=>{
        if (err) throw err;
        console.log(data);
        let res = '';
        data.forEach(ele=>{
            res += `${ele}`;
        })
        response.send(res);
    })
 })
const fs = require("fs")
const express = require("express");

let myApp = express()

myApp.listen(5000,()=>console.log("myApp is runing on the port 5000"))

myApp.use('/',express.static("/users/SRAVANTHI/Documents/GUVI_PRACTICE/GUVI_LEARNING/guvi_learning/zen_tasks/weekend/week6/07-11-20-nodejs"))
myApp.use('/images',express.static("/users/SRAVANTHI/Documents/GUVI_PRACTICE/GUVI_LEARNING/guvi_learning/zen_tasks/weekend/week6/07-11-20-nodejs"))

myApp.get("/list",function(req,res){
    const dir_path = "/users/SRAVANTHI/Documents/GUVI_PRACTICE/GUVI_LEARNING/guvi_learning/";
    fs.readdir(dir_path,"utf-8",(err,data)=>{
        if (err) throw err;
        console.log("Reading document folders :",data)
        let result = '';
        let icon;
        data.forEach(element => {
            console.log(element)
            let stats = fs.statSync(dir_path+element)
            if(stats.isDirectory()){
                icon = `<img src = "/images/folder.png" width = "50px" height = "50px">`
            }
            else{
                icon = `<img src = "/images/file.png" width = "50px" height = "50px">`
            }
            result += "<div>" + icon + element + "</div>" + "<br>"
            
        })
        res.send(result)
    })

})
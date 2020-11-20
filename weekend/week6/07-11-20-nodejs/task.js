const fs = require("fs")
const express = require("express");

let myApp = express()

myApp.listen(5000,()=>console.log("myApp is runing on the port 5000"))

myApp.use('/',express.static("C:\\users\\SRAVANTHI\\Documents\\GUVI_PRACTICE\\GUVI_LEARNING\\guvi_learning\\zen_tasks/weekend/week6/07-11-20-nodejs"))
myApp.use('/images',express.static("C:\\users\\SRAVANTHI\\Documents\\GUVI_PRACTICE\\GUVI_LEARNING\\guvi_learning\\zen_tasks/weekend/week6/07-11-20-nodejs"))

myApp.get('/list',(request,response)=>{
    const dir_path = 'C:/Users/SRAVANTHI/Documents';
    console.log(dir_path)
    fs.readdir(dir_path,'utf-8',(err,data)=>{
        console.log(data)
        let res = "";
        let icon;
        data.forEach(ele=>{
            console.log(ele)
            //let stats = fs.statSync(dir_path+ele)
            if(stats.isDirectory()){
                icon = `<img src ="/images/folder.png" width="50px" height="50px">`;
            }
            else{
                icon = `<img src ="/images/file.png" width = "50px" height = "50px">`;
            }
            res += "<div>" + icon + ele + "</div>" + "<br>";
            response.send(res);

        })
    })

})
const express = require('express');

const {MongoClient,ObjectId} = require('mongodb');

const myApp = express();

//setting the port address

const port = process.env.PORT || 3000;
const dbUrl = "mongodb://127.0.0.1:27017/";
//middle ware
myApp.use(express.json())
//get method to retrieve the data

myApp.get('/',async (req,res)=>{
try{
    let client = await MongoClient.connect(dbUrl);
    let db = client.db("studentInfo");
    let result =  await db.collection('user').find().toArray();
    res.status(200).json({result});
    client.close();

}
catch(err){
    console.log(err)
    res.send(500)
}
})
//post method to add the data

myApp.post('/add-user', async (req,res)=>{
    try {
        let client =  await MongoClient.connect(dbUrl);
        let db = client.db("studentInfo");
        let result = await db.collection("user").insertOne(req.body);
        res.status(200).json({message: "Inserted one record", result})
        client.close();
        
    } catch (error) {
        console.log(err);
        res.send(500);
    }
})



myApp.listen(port,()=>console.log(`your app is running with the ${port}`))
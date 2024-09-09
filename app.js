const express = require("express")
const app = express();

app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.time);
    next()
})

app.get("/", (req,res)=>{
    console.log("Hii, I am root");
});

app.get("/random", (req,res)=>{
    console.log("Hii, I am random page");
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});

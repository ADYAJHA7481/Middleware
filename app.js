const express = require("express")
const app = express();
const ExpressError = require("./ExpressError");

//logger - morgan
// app.use((req,res,next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.time);
//     next()
// })

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(404,"ACCESS DENIED!");
};

// app.get("/random", (req,res,next)=>{
//     console.log("Hii, I am random page");
//     next();
// });

app.get("/err",(req,res)=>{
    abcd = abcd;
})

app.get("/api", checkToken, (req,res)=>{
    res.send("Data");
});

app.get("/", (req,res)=>{
    console.log("Hii, I am root");
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin Forbidden");
});

app.use((err,req,res,next)=>{
    let {status = 500 , message } = err;
    res.status(status).send(message);
});

// app.use((req,res)=>{
//     res.send("Page not found!!");
// });

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});

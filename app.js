// function sum(a, b){
//     return a +b
// }

// const total = sum(10,200);
// console.log('====================================');
// console.log("Total", total);
// console.log('====================================');

// const {sum} = require("./helpers")
// const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.end("hello world from the node.js real update")
// })


// server.listen(3000);
// const total = sum(10,200)
// console.log("Total", total);


// const fs = require("fs")
// const filName = "target.txt"

// fs.watch(filName, ()=>console.log("File Changed"))

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const postRoutes = require("./routes/post");

app.use("/", postRoutes);

const port = 3000;

app.listen(port, () => {
    console.log("Api is listening on port " + port);
});
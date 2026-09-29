// const helpers = require("./helpers");

// const total = helpers.sum(10,200)

// console.log("Total", total);

// function sum(a, b){
//     return a +b
// }
const {sum} = require("./helpers")
const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("Hello world")
})

const sum = (a,b) => {
    return a +b
};



module.exports = {
    sum
}



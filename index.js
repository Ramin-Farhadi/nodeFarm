const fs = require('fs');
const http = require('http');


// Files/////////////////

// const textIn = fs.readFileSync('./txt/input.txt','utf-8');

// const textOut = `This is what we know from avacado: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);


// console.log('File was written!');

// fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
//    fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data1)=>{
//     fs.readFile('./txt/append.txt','utf-8',(err,data2)=>{
//       fs.writeFile('./txt/final.txt',`${data1} \n ${data2}`, err =>{
//         console.log('your file has been written');
//       });
//     })
//    })
// }) 
// console.log('file will be read')

// Server ///////////////////

const server = http.createServer((req, res) =>{
  console.log(req);
  res.end('hello from the server');
})


server.listen(8000,'127.0.0.1',()=>{
  console.log('listening to request on port 8000');
})
   /*  2 flavors when it comes to file module
   we can do it asynchronously-non blocking
   or synchronously-blocking*/
   //THIS IS SYNCHRONOUS APPROACH
const{readFileSync,writeFileSync}=require('fs');


   /*this is the same as above
   const fs= require('fs')
    fs.readFileSync*/
const first=readFileSync('../content/first.txt','utf-8');
const second=readFileSync('../content/second.txt','utf-8');
/*console.log(first,second);
    to create a new file the method for that is the writeFileSync
    if the file is not there it will create a new one
    if the file is already there node by default will override all the values that are in the file*/
// writeFileSync('../content/result-sync.txt',`here is the result:${first},${second}`)
    /*if you just want to append into the file
    if you set flag:'a' it will append*/
writeFileSync('../content/result-sync.txt',`here is the result:${first},${second}`,{flag:'a'})
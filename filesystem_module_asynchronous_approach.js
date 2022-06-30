const {readFile,writeFile}=require('fs')

readFile('../content/first.txt','utf-8',(err,result)=>{
if(err){
  console.log(err)
  return; 
}
const first= result;
readFile('../content/second.txt','utf-8',(err,result)=>{
  if(err){
    console.log(err)
    return; 
  }

const second = result
writeFile('../content/result-async.txt',`Here is the result of async: ${first},${second}`,()=>{
 if(err){
  return;
 }
 console.log(result);
})
})
//console.log(result)

})

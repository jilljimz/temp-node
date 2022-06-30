//os module
//the general setup for the built-in modules or even the external ones 
const os=require('os')
//so now you can have access to all the methods in os

//infor about current user
const user=os.userInfo()
console.log(user);
//get the uptime of the system or how long the computer has been running in seconds
console.log(user);
console.log(`the system uptims is ${os.uptime()}`);
const currentOs={
  name:os.type(),
  release:os.release(),
  totalMem: os.totalmem(),
  freeMem:os.freemem(),

}
console.log(currentOs);


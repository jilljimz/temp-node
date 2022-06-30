//NodeJS uses CommonJs, every file module(by default)
//Modules - Encapsulated Code(only share minimum)
//everytime you create your module always start with ./
//inorder to import certain modules or files use the require
const names=require('./4-names')
const sayHi=require('./5-utils')
const data = require('./6-alternative-to-export')
require('./7-mind-grenade')

// console.log(names);

sayHi(names.john)
sayHi(names.peter)
sayHi('susan')
//console.log(data)
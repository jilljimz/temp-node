const path=require('path')
//very useful property .,a separator property that returns a platform specific separator
console.log(path.sep)
const filepath=path.join('/website','JavaScript_Nuggets','reduce_basic.js')
console.log(filepath);
//get the basename
const base=path.basename(filepath);
console.log(base)

//path.resolve - returns an absolut path
const absolute=path.resolve(__dirname,'website','JavaScript_Nuggets','reduce_basic.js')
console.log(absolute);
// the below way we are destrcuring property/method of fs module ..
// below comment is other way of use
console.log('start')
//const fs = require('fs')
//const first =fs.readFileSync()

const {readFileSync, writeFileSync} =require('fs')
// utf-8 is type of encoding
const first = readFileSync('./content/first.text','utf8')
const second = readFileSync('./content/second.text','utf8')

console.log('done with the task')
console.log('starting new task')

//at this time result-sync.text file doesnt exists so, node will crete it and write it down.
writeFileSync('./content/result-sync.text',`here is the result: ${first},${second}`,{flag:'a'})
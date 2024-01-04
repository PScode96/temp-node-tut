// Modules-->
//A module in JavaScript is just a file containing related code. In JavaScript,
// we use the import and export keywords to share and receive functionalities respectively across different modules. 
//The export keyword is used to make a variable, function, class or object accessible to other module.

//Why modules are used in JavaScript?
//ans-->in creating programs, there are situations where writing multiple lines of code is necessary. 
//The code could become quite large and difficult to maintain. 
//The use of JavaScript modules is a straightforward solution to this issue. 
//It ensures that code maintenance is organized and simple.


//CommonJS, every file is module (by default)

const names = require('./4-module1')
const sayHi = require('./5-module2')
console.log(names)
sayHi('susan')
sayHi(names.honey)
sayHi(names.peter)

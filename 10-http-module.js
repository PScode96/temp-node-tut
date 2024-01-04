const http = require('http');

//let us create a server using http method name createServer
// it takes a call back and this take two parameters
//i.e object ..the common practice to use req,and res. you can take whatever you want
// req--handles the incoming request by client through browser
//res-- it is response against req.
const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('welcome to home page')
       
    }
    else if(req.url === '/about'){
        res.end('here is our short history')
        
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    
    }
  



    //res.write('welcome to our homepage')
    //above line is our response against req.and once
    //we are done with it ,we have to end response,by below code
    //res.end()

})


// we setup the port where server will be listen
//this line is commonly associated with starting a server and 
//making it listen for incoming connections on port 5000. 
server.listen(5000)

var http = require('http')

var url =require('url')

http.createServer(function(req , res)
{

   var route = req.url

   if(route==='/')
   {
      res.end('This IS information from backend to home page')
   }

   if(route==='/getusername')
   {
      var usernames = ['Anjali' , 'Disha', 'Abhishek']
      res.end(JSON.stringify(usernames))
   }

   console.log("My Node JS Server started successfully on port 3000 !!!");
}).listen(3000
   )
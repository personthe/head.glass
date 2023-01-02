const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
res.write('HELLO')
res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('oops',error)
    }else {console.log('hello world', + port)}
})
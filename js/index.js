const http = require('http')


const server = http.createServer ((request, response) => {
    console.log(request.url)
    response.end('bienvenido al registro de radium rocket')
})

server.listen(4000)
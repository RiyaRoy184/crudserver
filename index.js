const jsonServer = require('json-server')

const crudServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000

const route = jsonServer.router('db.json')

crudServer.use(middleware)
crudServer.use(route)

crudServer.listen(PORT,()=>{
    console.log(`crudServer started at PORT : ${PORT} and waiting for client request!!!`);  
})
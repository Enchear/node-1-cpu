
const cluster = require("cluster")
const cpus = require("os").cpus 
const pid = require("process").pid

function iniciarServidor(){
  const http = require("http")
const server = http.createServer((req, res) =>{

  res.end("bem vindo ao site")
})
const PORT= 2500
  server.listen(PORT, console.log(`Servidor iniciado em http:localhost:${PORT}`))
}

function criarProcessosFilhos(){
  server.listen (console.log(`Processo pai PID ${pid}`
  
  ))
  for(let i=0; i<cpus().length; i++){ 
    cluster.fork()
  }
}

if(cluster.isMaster)
  criarProcessosFilhos()
else iniciarServidor()
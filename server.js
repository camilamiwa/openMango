var fs = require('fs');
//var http = require('http');
//var https = require('https');
//var privateKey  = fs.readFileSync('selfsigned.key', 'utf8');
//var certificate = fs.readFileSync('selfsigned.crt', 'utf8');

//var credentials = {key: privateKey, cert: certificate};
const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

//var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

const port = 80
const host = '0.0.0.0';

app.listen(port, host)
//httpsServer.listen(port, host)
//httpServer.listen(3000, host)

console.log(`Running on https://${host}:${port}`);
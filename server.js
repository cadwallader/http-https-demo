//http
//listen on default port 80
const http = require('http');
http.createServer((req, res) => {
  console.log(`${req.method} ${req.headers.host}:${req.client.localPort}${req.url}`)
  res.end('Got HTTP\n');
}).listen(80, ()=>console.log('http://localhost:80'));

//https
//get credentials from file (run makeKeys.sh to generate keys)
const fs = require('fs');
const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};
//listen on default port 443
const https = require('https');
https.createServer(options, (req, res) => {
  console.log(`${req.method} ${req.headers.host}:${req.client.localPort}${req.url}`)
  res.end('Got HTTPS\n');
}).listen(443, ()=>console.log('https://localhost:443'));

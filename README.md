# HTTP and HTTPS server examples
* Uses node's built-in http and https modules
* Creates public and private keys using openssl
* Listens on default ports 80 and 443 respectively
```sh
git clone https://github.com/andrew-cadwallader/http-https-demo.git
cd http-https-demo

npm start &
#> http-https-demo@1.0.0 start /httphttps
#> if [[ -f key.pem ]] ; then node server.js ; else npm run keygen && node server.js ; fi
#
#http://localhost:80
#https://localhost:443

curl localhost
#GET localhost:80/
#Got HTTP

curl -k https://localhost # -k flag to ignore self-signed certificate
#GET localhost:443/
#Got HTTPS

curl https://localhost # without -k flag
#curl: (60) SSL certificate problem: self signed certificate
#More details here: https://curl.haxx.se/docs/sslcerts.html
#
#curl failed to verify the legitimacy of the server and therefore could not
#establish a secure connection to it. To learn more about this situation and
#how to fix it, please visit the web page mentioned above.
```

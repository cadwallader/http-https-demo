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

### example unencrypted http packet
Note payload data `Got HTTP`
```
14:58:53.663578 IP6 localhost.http > localhost.62912: Flags [P.], seq 1:109, ack 74, win 6370, options [nop,nop,TS val 882519335 ecr 882519334], length 108: HTTP: HTTP/1.1 200 OK
	0x0000:  6004 1fa0 008c 0640 0000 0000 0000 0000  `......@........
	0x0010:  0000 0000 0000 0001 0000 0000 0000 0000  ................
	0x0020:  0000 0000 0000 0001 0050 f5c0 3144 f9de  .........P..1D..
	0x0030:  7450 c60b 8018 18e2 0094 0000 0101 080a  tP..............
	0x0040:  349a 2d27 349a 2d26 4854 5450 2f31 2e31  4.-'4.-&HTTP/1.1
	0x0050:  2032 3030 204f 4b0d 0a44 6174 653a 2053  .200.OK..Date:.S
	0x0060:  6174 2c20 3133 204a 756e 2032 3032 3020  at,.13.Jun.2020.
	0x0070:  3138 3a35 383a 3533 2047 4d54 0d0a 436f  18:58:53.GMT..Co
	0x0080:  6e6e 6563 7469 6f6e 3a20 6b65 6570 2d61  nnection:.keep-a
	0x0090:  6c69 7665 0d0a 436f 6e74 656e 742d 4c65  live..Content-Le
	0x00a0:  6e67 7468 3a20 390d 0a0d 0a47 6f74 2048  ngth:.9....Got.H
	0x00b0:  5454 500a                                TTP.
```

### Encrypted https packet
Payload data `Got HTTPS` encrypted
```
14:58:59.104858 IP6 localhost.https > localhost.62913: Flags [P.], seq 2025:2157, ack 693, win 6361, options [nop,nop,TS val 882524762 ecr 882524762], length 132
	0x0000:  6009 79b6 00a4 0640 0000 0000 0000 0000  `.y....@........
	0x0010:  0000 0000 0000 0001 0000 0000 0000 0000  ................
	0x0020:  0000 0000 0000 0001 01bb f5c1 db98 66b0  ..............f.
	0x0030:  1388 ac5c 8018 18d9 00ac 0000 0101 080a  ...\............
	0x0040:  349a 425a 349a 425a 1703 0300 7f87 1463  4.BZ4.BZ.......c
	0x0050:  c005 217c 4ec4 2542 83fa 75c2 4ef2 5769  ..!|N.%B..u.N.Wi
	0x0060:  2183 6ac2 b698 65de 8dd2 dac5 09da a7c6  !.j...e.........
	0x0070:  faa1 de58 95e3 afb9 4419 1606 183c 571b  ...X....D....<W.
	0x0080:  7f0f 8bb5 600e 4140 d97f 2c81 c3e0 3b8f  ....`.A@..,...;.
	0x0090:  19d1 f5b9 a3f1 c7f9 b691 7d24 bddb 4b70  ..........}$..Kp
	0x00a0:  1e22 7653 c66a e3d5 3f92 e220 e6fa 4391  ."vS.j..?.....C.
	0x00b0:  679c 9f3e b185 6981 50e8 2f19 ef1c 8a45  g..>..i.P./....E
	0x00c0:  ce4d b25a 9e62 74a7 c849 d93f            .M.Z.bt..I.?
```


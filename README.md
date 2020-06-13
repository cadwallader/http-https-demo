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

### example encrypted https packet
Payload data `Got HTTPS` encrypted
```
14:58:59.102401 IP6 localhost.https > localhost.62913: Flags [P.], seq 1:1451, ack 518, win 6363, options [nop,nop,TS val 882524760 ecr 882524758], length 1450
	0x0000:  6009 79b6 05ca 0640 0000 0000 0000 0000  `.y....@........
	0x0010:  0000 0000 0000 0001 0000 0000 0000 0000  ................
	0x0020:  0000 0000 0000 0001 01bb f5c1 db98 5ec8  ..............^.
	0x0030:  1388 abad 8018 18db 05d2 0000 0101 080a  ................
	0x0040:  349a 4258 349a 4256 1603 0300 7a02 0000  4.BX4.BV....z...
	0x0050:  7603 03c6 735d 536e 7a4b 1bd5 03b4 52c0  v...s]SnzK....R.
	0x0060:  65b8 2f6c 0941 3186 572c 800f 25a7 46cf  e./l.A1.W,..%.F.
	0x0070:  806e 2820 f8ad b445 dbda edd9 c0dd 4d56  .n(....E......MV
	0x0080:  9526 3be0 0102 4d24 d87d c775 48f0 0b78  .&;...M$.}.uH..x
	0x0090:  5b23 28e5 1302 0000 2e00 2b00 0203 0400  [#(.......+.....
	0x00a0:  3300 2400 1d00 204e c3bd 5cb9 3108 a8f4  3.$....N..\.1...
	0x00b0:  ad72 df8a 0828 a6b7 b1e3 76ce aad3 8965  .r...(....v....e
	0x00c0:  6bb0 a8b3 aa7c 0714 0303 0001 0117 0303  k....|..........
	0x00d0:  0026 8240 fc0b 9ddb 4209 6818 42f0 d641  .&.@....B.h.B..A
	0x00e0:  ace6 973f 62ea 52c0 5384 c7c6 85e5 fc9c  ...?b.R.S.......
	0x00f0:  9971 484c e720 40e1 1703 0303 8d25 4908  .qHL..@......%I.
	0x0100:  0b91 d093 4ff0 e523 b3f1 1ea0 4761 f318  ....O..#....Ga..
	0x0110:  d088 9ce5 a368 b198 b786 804d c84b c79e  .....h.....M.K..
	0x0120:  4cd5 ccbd 71d7 8641 ce72 1f8a ce9c 3914  L...q..A.r....9.
	0x0130:  9caa 00b7 02e1 b3f8 8ba3 52ca 7627 a778  ..........R.v'.x
	0x0140:  755d cfc3 4fb7 10d6 856a 9f82 a46f 87bd  u]..O....j...o..
	0x0150:  bd61 08a6 f2e7 76dc f08c bcd7 4d9b cb3b  .a....v.....M..;
	0x0160:  a8cb 4092 86f7 5a4a b890 28d9 fd78 945c  ..@...ZJ..(..x.\
	0x0170:  9ba1 397a 869f 3b86 b649 01cf 5f53 6e01  ..9z..;..I.._Sn.
	0x0180:  6e3a dc58 32e5 b575 7337 7996 f2a5 29de  n:.X2..us7y...).
	0x0190:  f836 371c 9662 44db 34ad 647b 06dd 009a  .67..bD.4.d{....
	0x01a0:  cc2c 012d 857a e5bf 2e98 567d 0f3d 9347  .,.-.z....V}.=.G
	0x01b0:  3b37 a478 a2a3 425d eb18 65e4 fd8a fff2  ;7.x..B]..e.....
	0x01c0:  724b 51ef 0d65 c958 959e b5ae 8443 ff3d  rKQ..e.X.....C.=
	0x01d0:  ad8b a86f 914a a470 8827 7b77 9a92 781d  ...o.J.p.'{w..x.
	0x01e0:  b9d6 9d7a 18b8 3a7c 0db0 ef7e 5b0c 0fa3  ...z..:|...~[...
	0x01f0:  8fa1 2d58 bbb2 cf4c ae7c ad00 d117 6615  ..-X...L.|....f.
	0x0200:  1ff5 707d d738 dad4 507a 663b 3b1a 26b8  ..p}.8..Pzf;;.&.
	0x0210:  f98d bace 5193 c281 7dec 1fe7 cb67 426b  ....Q...}....gBk
	0x0220:  a259 8c75 0e7d 6ded 094c 4ba0 4989 c410  .Y.u.}m..LK.I...
	0x0230:  50f4 2f2d 3a28 98ff 269b 27d5 74d9 9a83  P./-:(..&.'.t...
	0x0240:  7b39 bc39 6813 72a6 a47e 7235 4c34 ca53  {9.9h.r..~r5L4.S
	0x0250:  b7de 1278 b233 001a 696d 94a4 e42f d94b  ...x.3..im.../.K
	0x0260:  0c83 f936 558e 81b5 6638 e917 eb37 8559  ...6U...f8...7.Y
	0x0270:  9347 a24b 466e c128 4826 81e1 0f24 783d  .G.KFn.(H&...$x=
	0x0280:  1eb2 3c04 afae bb07 868f 662a 52a8 51cd  ..<.......f*R.Q.
	0x0290:  94eb bb4a a248 7d87 a453 2eef 7359 ed67  ...J.H}..S..sY.g
	0x02a0:  b967 9897 25ba b9e3 8f49 388e 6394 6328  .g..%....I8.c.c(
	0x02b0:  e5e8 394b 8fb0 63ba 9e47 3a13 c167 a315  ..9K..c..G:..g..
	0x02c0:  dbef e7db 0a16 a00c 7646 213f e394 b1ca  ........vF!?....
	0x02d0:  fcae 8781 1642 e3c2 2cdc e0b5 4639 3727  .....B..,...F97'
	0x02e0:  a071 2f13 2aed a4e7 8df0 5c44 1498 385c  .q/.*.....\D..8\
	0x02f0:  08bb 8280 7aef 7494 31bb 2316 bcf1 5465  ....z.t.1.#...Te
	0x0300:  b4b3 5cc7 cb6d da36 c0c8 d66e 1fcf d7ea  ..\..m.6...n....
	0x0310:  424f e3d3 be3f 23d0 1456 5f4a 4160 4247  BO...?#..V_JA`BG
	0x0320:  1ed1 0b4e cbde 6e0e ae2e 05ce 68d4 2bbb  ...N..n.....h.+.
	0x0330:  2898 6b45 5389 9c5e 70d2 e0db aced 836c  (.kES..^p......l
	0x0340:  688e d21e 88a8 2570 e65a 67d1 699e 3f83  h.....%p.Zg.i.?.
	0x0350:  f6a7 8549 6749 423a c8e5 d14d 7f01 3bbc  ...IgIB:...M..;.
	0x0360:  c7ba 2bc2 36b2 b856 86eb 81cb 6eb7 9912  ..+.6..V....n...
	0x0370:  e4ed 5d16 20b8 764e 2f65 f175 f76e d6cf  ..]...vN/e.u.n..
	0x0380:  f12d 850a 852b b983 12fc 66af 4b0c ed1a  .-...+....f.K...
	0x0390:  e149 275a b582 98b1 a5bf 13e3 6d7c eefb  .I'Z........m|..
	0x03a0:  ceb5 032f 9b68 976c f68b 2153 faf9 6dad  .../.h.l..!S..m.
	0x03b0:  320f a0e3 fe90 ddb9 3a1e 9d6d cf82 b5b0  2.......:..m....
	0x03c0:  055b 0b00 ee58 2ed3 647d 94aa dfdb 582c  .[...X..d}....X,
	0x03d0:  2e2c 6353 49bd 0103 fbbc 3d28 e21c 694b  .,cSI.....=(..iK
	0x03e0:  ee54 7c76 c21e 573e 43bc b18f 5e84 7bd6  .T|v..W>C...^.{.
	0x03f0:  d1df da93 392e e1e0 626b 24b5 e13e 7543  ....9...bk$..>uC
	0x0400:  cd80 c0df db39 d2b9 140e ecc2 09d0 ceee  .....9..........
	0x0410:  96e1 b371 9916 620e 5b7e 0287 9b38 c71f  ...q..b.[~...8..
	0x0420:  e63b c385 c6b1 503c 0ced f030 e6e3 9b06  .;....P<...0....
	0x0430:  e900 d2b0 e1c0 4905 2a29 c63b 64bd 76cd  ......I.*).;d.v.
	0x0440:  5ca1 d89d c025 2b0f e346 2735 26fb 3d04  \....%+..F'5&.=.
	0x0450:  5ba9 4bcc d689 9a21 8ac4 23c3 d674 e6fd  [.K....!..#..t..
	0x0460:  90db 7ec5 412d 642e 8a21 bb70 ac32 1e36  ..~.A-d..!.p.2.6
	0x0470:  3b0f e69d bff3 733c 189b 68df 07a1 d633  ;.....s<..h....3
	0x0480:  fb38 aedd 1237 08a8 585e 1703 0301 1994  .8...7..X^......
	0x0490:  7f13 25be 75f8 34a2 1a79 5956 52dc 5a1f  ..%.u.4..yYVR.Z.
	0x04a0:  e40b 241b 9b10 0a61 96e2 8c0d 4947 2d9f  ..$....a....IG-.
	0x04b0:  894e cc27 152e b94b 6f6c 8692 80ae 780d  .N.'...Kol....x.
	0x04c0:  16ad 8c57 11a1 decb 2b4f 2265 381a 9b57  ...W....+O"e8..W
	0x04d0:  ebb4 0870 84c3 25db 8301 39b4 5582 22fa  ...p..%...9.U.".
	0x04e0:  b9ef 5efb c1bb 85fb 2220 58f2 8043 f65a  ..^.....".X..C.Z
	0x04f0:  1b71 2922 440c 2b6d c13c 9ff9 7844 12e2  .q)"D.+m.<..xD..
	0x0500:  08e7 50af db8a 51b5 ed88 2396 605e 0755  ..P...Q...#.`^.U
	0x0510:  a489 4ca7 6318 e30b 0d41 f420 4f9d affe  ..L.c....A..O...
	0x0520:  ce42 085f a22d 9bb1 c360 1058 e82a e0b9  .B._.-...`.X.*..
	0x0530:  2068 82d1 9b08 5d5b 6a45 51ca 7407 c3a8  .h....][jEQ.t...
	0x0540:  6626 3613 8c16 5a85 8518 71ca be79 71c6  f&6...Z...q..yq.
	0x0550:  81d0 d5a5 579a 6952 acbe 6bd6 308f f00a  ....W.iR..k.0...
	0x0560:  25ac bcee 3d29 bdda b04c 0341 e1a4 f54b  %...=)...L.A...K
	0x0570:  16a1 d2fa 6fd3 64cb f5f0 cad4 9a99 b356  ....o.d........V
	0x0580:  4874 096e 23e8 aa5a 210c d9de a51b a679  Ht.n#..Z!......y
	0x0590:  6523 4927 1795 25b0 0a2c 6f2b 5add 8e41  e#I'..%..,o+Z..A
	0x05a0:  7339 8d31 f5cc 6b56 1703 0300 4500 d86b  s9.1..kV....E..k
	0x05b0:  0930 a03d d300 8170 5281 af1a b850 29fa  .0.=...pR....P).
	0x05c0:  bf03 c5cb 289e d8e3 3651 f3dc 6a1d 5958  ....(...6Q..j.YX
	0x05d0:  294b 2115 594e fcc0 ab6c b2b2 5968 783c  )K!.YN...l..Yhx<
	0x05e0:  a3a5 5e53 690d f5d9 ce5e 9bd0 bf8c f774  ..^Si....^.....t
	0x05f0:  eb03                                     ..
```


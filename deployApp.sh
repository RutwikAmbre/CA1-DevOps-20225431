#!/bin/bash
sudo apt update && sudo apt install nodejs npm

sudo npm install -g pm2

pm2 stop simple_app

cd CA1-DevOps-20225431/

npm install

echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt

pm2 start ./bin/www --name simple_app --env=production
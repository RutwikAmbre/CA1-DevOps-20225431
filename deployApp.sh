#!/bin/bash

# Update package lists and install Node.js and npm
sudo apt update && sudo apt install nodejs npm -y

# Install PM2 globally to manage Node.js applications
sudo npm install -g pm2

# Stop the existing application process (if running)
pm2 stop simple_app

# Navigate to the project directory
cd CA1-DevOps-20225431/

# Install project dependencies from package.json
npm install

# Save the private key and server certificate from environment variables to files
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt

# Start the application using PM2 with the specified entry point and environment
pm2 start ./bin/www --name simple_app --env=production

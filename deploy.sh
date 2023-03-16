#!/bin/bash

# Install required dependencies
npm install

# Build your site
npm run build

# Deploy your site to Render
render deploy --name erdaddy --branch main

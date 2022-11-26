#!/bin/bash

nvm --version
node --version
yarn --version

# install deps
yarn install

# build server
yarn nx run strapi:build

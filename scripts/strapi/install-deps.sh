#!/bin/bash

# this shouldn't be necessary, but it currently is
scripts/strapi/env-setup.sh

nvm --version
node --version
yarn --version

# install deps
yarn install

# build server
yarn nx run strapi:build

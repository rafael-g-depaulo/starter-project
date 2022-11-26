#!/bin/bash

# this shouldn't be necessary, but it currently is
####### CONTENT OF ENV-SETUP.SH ################
####### CONTENT OF ENV-SETUP.SH ################
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

# load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# install node
nvm install
nvm use
# nvm install 16.15.1

# install yarn
npm i -g yarn

# setup permissions for whole all files in project folder. this sometimes is necessary
sudo chmod -R 777 .
####### CONTENT OF ENV-SETUP.SH ################
####### CONTENT OF ENV-SETUP.SH ################


nvm --version
node --version
yarn --version

# install deps
yarn install

# build server
yarn nx run strapi:build

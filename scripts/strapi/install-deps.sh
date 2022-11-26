#!/bin/bash

# install deps
yarn install

# build server
yarn nx run strapi:build

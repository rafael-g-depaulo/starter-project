FROM node:16-alpine

USER node

WORKDIR /app

COPY [".nvmrc", ".yarnrc.yml", "./"]
COPY .yarn .

ENTRYPOINT ["yarn"]

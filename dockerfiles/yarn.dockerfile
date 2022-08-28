FROM node:16-alpine

USER node

WORKDIR /app

COPY [".nvmrc", "package.json", ".yarnrc.yml", "./"]
COPY .yarn .

ENTRYPOINT ["yarn"]

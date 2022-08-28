FROM node:16

WORKDIR /app

# add node/yarn config files
COPY [".nvmrc", "package.json", "yarn.lock", ".yarnrc.yml", "./"]
COPY .yarn/ ./.yarn/

RUN ["yarn", "install"]

COPY [ "babel.config.json", "jest.config.ts", "jest.preset.js", "nx.json", "tsconfig.base.json", "workspace.json", "./" ]

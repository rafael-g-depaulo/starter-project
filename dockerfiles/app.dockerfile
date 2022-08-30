FROM node:16

WORKDIR /app

# add node/yarn config files
COPY [".nvmrc", "package.json", "yarn.lock", ".yarnrc.yml", "./"]
COPY .yarn .yarn

# install dependencies
RUN ["yarn", "install"]

# add other config files from project root (update this when/if new root-level config files need to be added)
COPY [ ".editorconfig", ".eslintrc.json", ".prettierignore", ".prettierrc", "babel.config.json", "jest.config.ts", "jest.preset.js", "nx.json", "tsconfig.base.json", "workspace.json", "./" ]

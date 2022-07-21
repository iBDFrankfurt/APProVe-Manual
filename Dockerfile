FROM node:16.15.1-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node package*.json

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8586

CMD ["/bin/bash", "-c", "npm run docs:dev"]
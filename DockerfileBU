# Dockerfile

FROM node:16 as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run docs:build

FROM nginx:alpine
COPY --from=build /usr/src/app/docs/.vuepress/dist /usr/share/nginx/html

EXPOSE 8080
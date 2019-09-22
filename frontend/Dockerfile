FROM node:lts-slim

COPY package*.json ./
COPY index.html .
COPY server.js .
RUN npm install

COPY ./dist/ ./dist/

CMD node server.js

FROM node:boron

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY server.js .
EXPOSE 8181

CMD ["npm", "start"]

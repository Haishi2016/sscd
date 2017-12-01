FROM node:boron

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY server.js . 
COPY intention.js .
ADD data ./data
EXPOSE 8181

CMD ["npm", "start"]

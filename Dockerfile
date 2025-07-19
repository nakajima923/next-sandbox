FROM node:24.4.1

WORKDIR /home/node/app

COPY next-sandbox/package.json /home/node/app
COPY next-sandbox/package-lock.json /home/node/app

RUN npm install 

CMD ["npm","run","dev"]
FROM node:24.4.1

USER node
WORKDIR /home/node/app

COPY --chown=node:node next-sandbox/ /home/node/app

RUN npm install 

CMD ["npm","run","dev"]

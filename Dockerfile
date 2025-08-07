FROM node:24.4.1 AS builder

USER node
WORKDIR /home/node/app

COPY --chown=node:node next-sandbox/ /home/node/app

RUN npm install 


FROM node:24.4.1-slim

USER node
WORKDIR /home/node/app

COPY --from=builder --chown=node:node /home/node/app /home/node/app

CMD ["npm","run","dev"]


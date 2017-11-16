FROM node:8.9.1

WORKDIR /usr/src/app

RUN  npm install -g vue-cli

COPY . /usr/src/app

RUN npm i

CMD ['npm', 'run', 'production']

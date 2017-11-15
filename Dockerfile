FROM node:8-alpine

WORKDIR /usr/src/app

RUN apk update && apk add \
    autoconf \
    automake \
    gcc \
    g++ \
    make \
    libpng-dev \
    libtool \
    nasm

RUN  npm install -g vue-cli

COPY ./dev-center /usr/src/app

RUN npm i

CMD ['npm', 'run', 'production']
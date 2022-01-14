FROM node:12.22.9 AS builder

ARG NODE_ENV=production
ARG CONTENTFUL_HOST="cdn.contentful.com"
ARG CONTENTFUL_SPACE_ID=""
ARG CONTENTFUL_ACCESS_TOKEN=""

RUN env

ADD package.json /app/
ADD yarn.lock /app/
WORKDIR /app

RUN yarn
ADD . /app
RUN yarn build-production

FROM nginx:1.13.11 as nginx

ENV BUILD=/app
ENV PORT=80

COPY --from=builder /app/public "$BUILD"

RUN apt-get update && apt-get install -y curl
WORKDIR /app
ADD ./nginx.conf /etc/nginx/nginx.conf
EXPOSE $PORT

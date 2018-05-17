FROM node:8-alpine as build

WORKDIR /app
ADD package.json /app/package.json
RUN npm install

ADD public/ /app/public
ADD src/ /app/src
RUN npm run build

FROM tenforce/caddyserver:latest

EXPOSE 80
EXPOSE 443

COPY Caddyfile /config/Caddyfile
COPY --from=build /app/build /app

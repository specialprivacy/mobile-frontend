FROM node:8-alpine as build

WORKDIR /app
ADD public/ /app/public
ADD package.json /app/package.json
ADD src/ /app/src

RUN npm install
RUN npm run build

FROM golang:alpine as caddybuild

# Install git and get the caddy source code
RUN apk --update add git
RUN go get github.com/mholt/caddy/caddy

# Checkout the latest stable release
WORKDIR /go/src/github.com/mholt/caddy
RUN git tag -l --sort=-creatordate | grep -v beta | head -n 1 | xargs git checkout
# Build it
WORKDIR /go/src/github.com/mholt/caddy/caddy
RUN go build

FROM alpine:latest

EXPOSE 80
EXPOSE 443
CMD ["/caddy", "-conf", "/Caddyfile"]

COPY --from=caddybuild /go/src/github.com/mholt/caddy/caddy/caddy /
COPY Caddyfile /Caddyfile
COPY --from=build /app/build /app

# Mobile Consent UI

## Description
An implemenation of the mobile consent UI designed by TUB for WP 4.

## Run
A prebuilt docker image is available at: `registry-special.tenforce.com/special/mobile-frontend`
  This contains a webserver which will serve the compiled website from the root.

The frontend expects the consent-management-backend to be able to serve the following relative urls:
* /policies
* /applications
* /users

Append `/#v1` or `/#v2` to the URL in the address bar of your browser to see version 1 and version 2 respectively

If you are not interested in the code per se, it is recommended to use the special-demonstrator instead.

## Build
### Local Development
To run the UI type the following commands in terminal:

```bash
npm install
npm start
```

### Docker
```bash
docker build -t mobile-frontend .
docker run -p "80:80" mobile-frontend
```

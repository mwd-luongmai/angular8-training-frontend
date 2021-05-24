FROM webratio/nodejs-http-server:0.9.0
WORKDIR /opt/www

COPY ./dist/swatang /opt/www
EXPOSE 8080
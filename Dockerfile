FROM node:18-alpine3.15 as build
WORKDIR /app
EXPOSE 80
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY docker/nginx/example.conf /etc/nginx/conf.d/
COPY --from=build /app/build .


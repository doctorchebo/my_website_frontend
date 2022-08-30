FROM node:18-alpine3.15 as build
WORKDIR /app
EXPOSE 80
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:latest
WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf


# build stage
FROM node:lts-alpine as build-stage
RUN npm install -g http-server
WORKDIR /app/ui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8081
CMD [ "http-server", "dist", "-p", "8081" ]

# production stage
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/ui/dist /usr/share/nginx/html
#EXPOSE 8081
#CMD ["nginx", "-g", "daemon off;"]
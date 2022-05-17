FROM node:16 as node
WORKDIR /app

COPY . .
RUN npm install
RUN npm build --prod

FROM nginx:1.21
COPY --from=node /app/dist/PokeLens /usr/share/nginx/html

EXPOSE 80



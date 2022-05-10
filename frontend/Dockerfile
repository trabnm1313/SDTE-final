FROM node:16
WORKDIR /app
EXPOSE 9000

COPY . .
RUN npm install

CMD ["npm", "run", "serve"]
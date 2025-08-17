FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
ENV PORT=8080 NODE_ENV=production
EXPOSE 8080
CMD ["npm","start"]

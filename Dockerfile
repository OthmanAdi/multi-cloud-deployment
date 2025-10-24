# Multi-Cloud Dockerfile
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app files
COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["node", "server.js"]
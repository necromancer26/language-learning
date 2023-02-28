# Specify a base image
FROM node:18-slim as node
FROM ubuntu:focal-20230126 as base

# Set the working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN yarn

# Build Next.js app
RUN yarn build

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]

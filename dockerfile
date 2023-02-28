# Specify a base image
FROM node:18-slim as node
RUN npm install -g yarn
FROM ubuntu:focal-20230126 as base

# Set the working directory
WORKDIR /app

# Copy app files
# COPY . .
# Copy app files
COPY --from=node /usr/local/bin/yarn /usr/local/bin/yarn
COPY --from=node /usr/local/bin/yarnpkg /usr/local/bin/yarnpkg
# Install dependencies
RUN yarn Install --production

# Build Next.js app
RUN yarn build

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]

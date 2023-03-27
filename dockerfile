FROM node:19-slim as node
# FROM ubuntu:20.04 as base

# COPY --from=node /usr/local/include /usr/local/include/
# COPY --from=node /usr/local/lib/ /usr/local/lib/
# COPY --from=node /usr/local/bin/ /usr/local/bin/

# RUN corepack disable && corepack enable
# ENTRYPOINT [ "/usr/local/bin/node" ]
# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN npm install --omit=dev

# Copy app source code
COPY . .
# Install dependencies
# RUN apt-get update && \
#     apt-get install -y nodejs && \
#     npm install --production

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm","run", "start"]

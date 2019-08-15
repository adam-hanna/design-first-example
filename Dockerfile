FROM node:10-alpine

# 1. Create the working directory at '/home/node/app' and give node use permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# 2. Set the working directory
WORKDIR /home/node/app

# 3. Copy the package.json and lock
COPY package*.json ./

# 4. Switch to non-root user
USER node

# 5. Install deps
RUN npm install

# 6. Copy the app
COPY --chown=node:node . .

# 7. Expose the port
EXPOSE 8080

# 8. Run the app
CMD [ "npm", "run", "dev" ]

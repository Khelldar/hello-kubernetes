#we'll use the full node image to do our builds
FROM node:8 as build

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production

# Bundle app source
COPY . .

#build .ts into .js
RUN npm run generate
RUN npm build

#in this image, we'll install dependecies, but only the ones needed to run (ie. not typescript)
FROM node:8 as dependencies

WORKDIR /app

COPY --from=build /app/package*.json ./
RUN npm ci --only=production

#for the image we'll actually use to deploy/run our app, let's keep it slim
FROM node:8-slim

WORKDIR /app

#copy over only what we need
COPY --from=build /app/package.json ./
COPY --from=build /app/migrations ./migrations
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/build ./build


ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "start" ]

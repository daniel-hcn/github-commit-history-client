# get the base node image
FROM node:14-alpine as builder

# set the working dir for container
WORKDIR /node

# copy the json file first
COPY ./package.json /node

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]
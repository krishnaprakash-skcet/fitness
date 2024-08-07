# Use an official node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container it contains  primary dependency
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container {. means from same/current directory of local device .. means from another directory in the docker workdir/app}
COPY . .

# Expose the port your app runs on or any other port container connects device to the specific port 
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

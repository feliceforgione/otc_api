# Use the official Node.js 20 slim image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the Express app will run on
EXPOSE 3000

# Command to run the Express app
CMD ["npm", "start"]
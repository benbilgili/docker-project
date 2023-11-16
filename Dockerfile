# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /nextjs-blog

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that your Next.js app is running on
EXPOSE 5000

# Start the application when the container starts
CMD ["sh", "-c", "node server/server.js & npm run dev"]

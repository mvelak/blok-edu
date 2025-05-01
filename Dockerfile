# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Set build-time environment variables
ARG NEXT_PUBLIC_THIRDWEB_CLIENT_ID
ARG PINATA_KEY
ARG PINATA_SECRET

ENV NEXT_PUBLIC_THIRDWEB_CLIENT_ID=$NEXT_PUBLIC_THIRDWEB_CLIENT_ID
ENV PINATA_KEY=$PINATA_KEY
ENV PINATA_SECRET=$PINATA_SECRET

# Build the Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]

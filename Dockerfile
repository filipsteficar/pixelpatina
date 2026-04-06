# --------------------------------
# 1. Build Stage
# --------------------------------
FROM node:20-alpine AS build

WORKDIR /app

# Install Dependencies First (Better Caching)
COPY package*.json ./
RUN npm ci --only=production=false

# Copy Source Code
COPY . .

# Build Astro Project
RUN npm run build

# --------------------------------
# 2. Serve Stage
# --------------------------------
FROM nginx:alpine

# Copy Custom nginx Config (Optional But Recommended)
COPY nginx.conf /etc/nginx/nginx.conf

# Copy Built Static Site From Build Stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
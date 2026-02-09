# =============================
# Stage 1: Install dependencies
# =============================
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# =============================
# Stage 2: Build the Next.js app
# =============================
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# =============================
# Stage 3: Production image
# =============================
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3069

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# If you have environment variables, you can set them here
# ENV NEXT_PUBLIC_API_URL=https://api.example.com

# Start the app
CMD ["node", "server.js"]

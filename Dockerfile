# Step 1 build stage
FROM node:alpine AS builder

RUN corepack enable

WORKDIR /src

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Step 2 Production stage
FROM node:alpine

RUN corepack enable

WORKDIR /app

COPY --from=builder /src/package.json ./package.json
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/public ./public

EXPOSE 3000

CMD [ "pnpm","run","start" ]
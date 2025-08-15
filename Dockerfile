FROM node:alpine

RUN corepack enable

WORKDIR /src

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm","run","start" ]
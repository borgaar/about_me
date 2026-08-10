FROM node:26-alpine AS base

RUN npm install -g pnpm

FROM base AS builder

WORKDIR /build

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM base AS runner

WORKDIR /app

COPY --from=builder /build/dist ./

RUN pnpm add serve

USER 1000:1000

EXPOSE 3000

CMD ["pnpm", "exec", "serve", "-s", ".", "-l", "3000"]


FROM node:16 as builder
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm build

FROM node:16
WORKDIR /app
COPY --from=builder /app/out .
EXPOSE 3001
CMD ["node" "dist.js"]
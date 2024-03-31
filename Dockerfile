FROM node:20


RUN mkdir /usr/app

WORKDIR /usr/app

COPY . .

COPY package.json package-lock.json ./

RUN npm ci --only=production

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

RUN chmod 755 scripts/entrypoint.sh

RUN chmod 755 scripts/wait-for-it.sh

EXPOSE 3000

ENTRYPOINT ["./scripts/entrypoint.sh"]
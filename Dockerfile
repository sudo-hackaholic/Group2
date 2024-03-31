FROM node:20-alpine


RUN mkdir /usr/app

WORKDIR /usr/app

COPY . .

COPY package.json package-lock.json ./

RUN npm ci --only=production

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

RUN chmod +x scripts/entrypoint.sh scripts/wait-for-it.sh

EXPOSE 3000

CMD [ "sh", "scripts/entrypoint.sh"]
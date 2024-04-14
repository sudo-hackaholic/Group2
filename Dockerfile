FROM node:20

WORKDIR /usr/app

COPY . .

RUN npm install

RUN chmod 755 scripts/entrypoint.sh

RUN chmod 755 scripts/wait-for-it.sh

# RUN addgroup --system appgroup && adduser --system appuser --ingroup appgroup
# USER appuser

# USER node

EXPOSE 3000

ENTRYPOINT ["./scripts/entrypoint.sh"]

# # build
# FROM node:20 AS build
# WORKDIR /usr/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN chmod 755 scripts/entrypoint.sh
# RUN chmod 755 scripts/wait-for-it.sh

# # image
# FROM node:20
# WORKDIR /usr/app
# COPY --from=build /usr/app .
# EXPOSE 3000
# ENTRYPOINT ["./scripts/entrypoint.sh"]
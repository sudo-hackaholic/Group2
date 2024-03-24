FROM node:20-alpine


RUN mkdir /usr/app

WORKDIR /usr/app


COPY . .

RUN npm install

# RUN npx prisma generate

# RUN npx prisma migrate dev

# RUN npx prisma db seed

CMD npm run dev

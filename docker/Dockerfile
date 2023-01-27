FROM node:lts-alpine as build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:lts-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=build /app/dist ./dist
CMD ["yarn", "start"]


FROM node:13.11.0-alpine

ARG runEnvironment
ENV startEnvironment=${runEnvironment}

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
# RUN apk update && apk upgrade && apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build:${runEnvironment}
# RUN npm run build:fhn3
# expose 5000 on container
# EXPOSE 5000

# set app serving to permissive / assigned
# ENV NUXT_HOST=0.0.0.0
# set app port
# ENV NUXT_PORT=5000

# start the app
# CMD [ "npm", "run","start:uat" ]
# RUN npm install pm2 -g
# CMD  npx cross-env NODE_ENV=uat node server/index.js

CMD npm run start:${startEnvironment}
# CMD npm run start:fhn3

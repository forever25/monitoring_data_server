FROM node:16

#镜像标签
LABEL author = "zws"
LABEL version = "1.0"
LABEL description = "前端监控系统"

WORKDIR /app
ADD . /app
RUN npm install pm2 -g && yarn install
EXPOSE 3001
CMD [ "yarn", "run","start-server"]
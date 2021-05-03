FROM node as spa_build
COPY . /opt/app
WORKDIR /opt/app
RUN npm i
RUN npm run-script build

FROM node
COPY --from=spa_build /opt/app/build /opt/app
WORKDIR /opt/app
RUN npm i -g serve
CMD ["serve"]
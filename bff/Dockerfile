FROM node as bff_build
COPY . /opt/app/
WORKDIR /opt/app/
RUN npm i
RUN npx tsc --outDir dist

FROM node
COPY --from=bff_build /opt/app/dist /opt/app
COPY package.json /opt/app
WORKDIR /opt/app
RUN npm i --production
CMD node .
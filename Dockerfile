FROM ubuntu:23.04

COPY ./front-end /home/front-end

WORKDIR /home/front-end

RUN ["apt", "update", "-y"]
RUN ["apt", "upgrade", "-y"]
RUN ["apt", "install", "npm", "-y"]
RUN ["apt", "install", "nodejs", "-y"]
RUN ["npm", "install", "-y"]

CMD ["npm", "run", "host"]

EXPOSE 5173

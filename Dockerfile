# Exec into the container
# docker run -it docker.io/library/3dfrontend:local /bin/sh

# Start the service
# make build
# docker run -d -p 3000:3000 docker.io/library/frontend:local
FROM node:current-alpine3.18
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install
ADD . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start-prod"]
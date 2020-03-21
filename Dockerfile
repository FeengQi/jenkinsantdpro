FROM nginx
WORKDIR /app
COPY ./dist /app
CMD ['nginx']


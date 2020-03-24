FROM nginx
WORKDIR /app
COPY ./nginxconfig/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html
EXPOSE 8009
CMD ["nginx", "-g", "daemon off;"]

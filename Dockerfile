# Production Env
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf    
WORKDIR /usr/share/nginx/html

# Add bash
RUN apk add --no-cache bash

## Copy .env file and shell script to container
ADD dist /usr/share/nginx/html

# add non-root user
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# non root users cannot listen on 80
EXPOSE 8080

USER nginx

ENTRYPOINT sh -c "./vite-envs.sh && nginx -g 'daemon off;'"

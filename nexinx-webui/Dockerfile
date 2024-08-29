
# Stage 1: Serve the app with Nginx
FROM nginx:alpine

# Copy the build files to Nginx's web directory
COPY build /usr/share/nginx/html

# Set proper permissions for all files
RUN chmod -R 755 /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
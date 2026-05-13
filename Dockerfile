#stable Ngnix base image use from Docker-Hub
FROM nginx:alpine

#Remove the defaut Ngnix configuration files
RUN rm /etc/nginx/conf.d/default.conf

#Copy website files Or source Code from Host to container 
COPY . /usr/share/nginx/html/

#Copy custom Ngnix configuration files 
COPY nginx.conf /etc/nginx/nginx.conf

#Expose port 
EXPOSE 80

#Start Ngnix 
CMD ["nginx", "-g","daemon off;"]


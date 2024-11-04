### Build the image:
`docker build -t todoop_backend .`
### Run the image with the default port(3500) and host(0.0.0.0) silently:
`docker run -d -p 3500:3500 todoop_backend`
### Run the image with a specified port and host:
`docker run -e "PORT=8080" -e "HOST=0.0.0.0" -p 8080:8080 todoop_backend`
### Or edit and run with Docker-Compose:
`docker-compose up -d`
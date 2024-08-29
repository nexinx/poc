#!/bin/bash

# Update and upgrade system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Set up React application
git clone <your-react-app-repo> /var/www/react-app
cd /var/www/react-app
npm install
npm run build

# Install Java
sudo apt-get install -y openjdk-11-jdk

# Set up Quarkus application
git clone <your-quarkus-app-repo> /var/www/quarkus-app
cd /var/www/quarkus-app
./mvnw package -Pnative
cd /var/www/quarkus-app
./target/*-runner -Dquarkus.http.host=0.0.0.0 &

# Install and configure Nginx
sudo apt-get install -y nginx
sudo tee /etc/nginx/sites-available/default <<EOF
server {
    listen 80;

    location / {
        root /var/www/react-app/build;
        try_files \$uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
sudo systemctl restart nginx

# Install and configure PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib
sudo -i -u postgres psql -c "CREATE DATABASE mydb;"
sudo -i -u postgres psql -c "CREATE USER user WITH ENCRYPTED PASSWORD 'password';"
sudo -i -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE mydb TO user;"

# Install and configure RabbitMQ
sudo apt-get install -y rabbitmq-server
sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server

# Install and configure Kafka
sudo apt-get install -y default-jdk zookeeperd
wget https://downloads.apache.org/kafka/2.13-2.8.0/kafka_2.13-2.8.0.tgz
tar -xzf kafka_2.13-2.8.0.tgz
sudo mv kafka_2.13-2.8.0 /usr/local/kafka
sudo tee /usr/local/kafka/config/server.properties <<EOF
broker.id=0
listeners=PLAINTEXT://:9092
log.dirs=/var/lib/kafka-logs
zookeeper.connect=localhost:2181
EOF
sudo mkdir /var/lib/kafka-logs
sudo /usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties &

# Install Python
sudo apt-get install -y python3 python3-pip

# Set up Python application
git clone <your-python-app-repo> /var/www/python-app
cd /var/www/python-app
pip3 install -r requirements.txt
python3 app.py &

echo "Setup completed successfully."

#!/bin/bash

echo "********************"
echo "Arrancar sistema"
echo "********************"

echo "********************"
echo "Arrancando MongoDB..."
cd /users/josemanuel/server/mongodb/bin
./mongod &

echo "********************"
echo "Arrancando Nifi..."
cd /users/josemanuel/server/nifi/bin/
./nifi.sh start &

echo "********************"
echo "Arrancando Spark..."
cd /users/josemanuel/server/spark-2.4/sbin/
./start-all.sh &

echo "********************"
echo "Arrancando Zookeeper y Kafka..."
cd /users/josemanuel/server/kafka/
./bin/zookeeper-server-start.sh ./config/zookeeper.properties &
./bin/kafka-server-start.sh ./config/server.properties &
./bin/kafka-server-start.sh ./config/server-2.properties &
./bin/kafka-server-start.sh ./config/server-3.properties &
./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 2 --partitions 1 --topic TopicSpanish &
./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 2 --partitions 1 --topic TopicEnglish &

echo "********************"
echo "Arrancando Elasticsearch y Kibana..."
cd /users/josemanuel/server/elasticsearch/bin/
./elasticsearch &
cd /users/josemanuel/server/kibana/bin/
./kibana &

# se ejecuta la aplicación MongoDB Compass para administrar la BBDD MongoDB
cd '/Applications/MongoDB Compass.app/Contents/MacOS/'
sleep 60; './MongoDB Compass' &
# lanzar Nifi en el navegador para poder ejecutar el flujo.
cd /users/josemanuel/Desktop/
sleep 120; /usr/bin/open -a Safari http://localhost:8081/nifi &

echo "********************"
exit

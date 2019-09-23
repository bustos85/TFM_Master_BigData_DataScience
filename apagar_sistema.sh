#!/bin/bash

echo "********************"
echo "Apagar sistema"
echo "********************"

echo "********************"
echo "Apagando Nifi..."
cd /users/josemanuel/server/nifi/bin/
./nifi.sh stop &

echo "********************"
echo "Apagando Spark..."
cd /users/josemanuel/server/spark-2.4/sbin/
./stop-all.sh &

echo "********************"
echo "Apagando Zookeeper y Kafka..."
# cerrar zookeeper, nodos de kafka y ficheros python consumidores kafka
cd /users/josemanuel/server/kafka/
./bin/zookeeper-server-stop.sh ./config/zookeeper.properties &
./bin/kafka-server-stop.sh ./config/server.properties &
./bin/kafka-server-stop.sh ./config/server-2.properties &
./bin/kafka-server-stop.sh ./config/server-3.properties &

echo "********************"
echo "Apagando Elasticsearch y Kibana..."
pkill -f elasticsearch &

echo "********************"
echo "Apagando MongoDB..."
cd /users/josemanuel/server/mongodb/bin
./mongo admin --eval "db.shutdownServer()" &

echo "********************"

exit
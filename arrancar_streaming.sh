#!/bin/bash

echo "********************"
echo "Arrancar streaming"
echo "********************"

echo "********************"
echo "Arrancando los ficheros que consumen los datos de Kafka..."
# lanzar los dos ficheros python que consumen los topics de Kafka, una vez ya está Nifi activo
# y el flujo de datos corriendo
cd /users/josemanuel/Desktop/TFM/tfm/
sleep 30;
python kafka_mongo_english.py &
python kafka_mongo_spanish.py &

echo "********************"
# lanzar pyspark para abrir notebook en el navegador y codificar y probar
pyspark &

echo "********************"
echo "Lanzando Kibana en el navegador..."
# lanzar Kibana en el navegador para visualizar datos y predicciones
/usr/bin/open -a Safari http://localhost:5601/ &

echo "********************"
exit
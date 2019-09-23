# bibliotecas y modulos a utilizar
from kafka import KafkaConsumer
from pymongo import MongoClient
from json import loads


# consumidor Kafka, donde se indica el topic del que consumir, y el server
consumer = KafkaConsumer(
    'TopicSpanish',
     bootstrap_servers=['localhost:9092'],
     auto_offset_reset='earliest',
     enable_auto_commit=True,
     group_id='my-group',
     value_deserializer=lambda x: loads(x.decode('utf-8')))


# se utiliza PyMongo para conectar al servidor de Mongo, y la colección correspondiente
client = MongoClient('localhost:27017')
collection = client.tfm_twitter.tweets_spanish

# por cada registro que se consume en el topic de Kafka se almacena en la colección de Mongo
for message in consumer:
    message = message.value
    collection.insert_one(message)
    print('{} added to {}'.format(message, collection))

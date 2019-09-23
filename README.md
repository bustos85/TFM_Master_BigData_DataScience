# TFM_Master_BigData_DataScience
TFM Master Big Data y Data Science

Se recogen aquí todos los scripts y el código generado durante el desarrollo del trabajo. 

La información estaría dividida de la siguiente forma:

•	Datasets:
df_result_english: dataset con todos los registros en inglés.
df_result_spanish: dataset con todos los registros en español.
df_result_english_neutral: dataset con registros en inglés con el mismo número de registros con sentimiento positivo, negativo y neutro.
df_result_spanish_neutral: dataset con registros en español con el mismo número de registros con sentimiento positivo, negativo y neutro.
df_result_english_noNeutral: dataset con registros en inglés con el mismo número de registros con sentimiento positivo y negativo. No hay registros con sentimiento neutro.
df_result_spanish_noNeutral: dataset con registros en español con el mismo número de registros con sentimiento positivo y negativo. No hay registros con sentimiento neutro.

•	Scripts:
o	arrancar_sistema.sh: script para arrancar en local las distintas herramientas del sistema.
o	arrancar_streaming.sh: script para arrancar en local las herramientas involucradas en la parte streaming del sistema.
o	apagar_sistema.sh: script para apagar las herramientas del sistema.
o	mongo_creacion.js: script para crear las tablas en la BBDD Mongo.
o	conseguir_tweets.py: script Python que conecta con la API de twitter y consigue traer tweets.
o	kafka_mongo_english.py: script Python que consume del topic con datos en inglés, y almacena los datos en la tabla correspondiente de Mongo.
o	kafka_mongo_spanish.py: script Python que consume del topic con datos en español, y almacena los datos en la tabla correspondiente de Mongo.

•	Notebooks:
o	prueba_tweets.ipynb: carga de fichero json obtenido a partir de fichero “conseguir_tweets.py” con las credenciales de la API, para ver el formato y atributos de los datos de Twitter.
o	generación_dataset.ipynb: generación de los ficheros csv finales con datos en inglés y español con etiqueta de sentimiento calculada, para entrenar los modelos.
o	Mongo_spark.ipynb: primeras pruebas con Mongo y Spark, conexión entre ambos, carga de datos tanto en RDDs como en Dataframes.
o	Spark_streaming.ipynb: pruebas con Spark Streaming, obteniendo los datos de Kafka y haciendo algunas operaciones con esos datos en streaming.
o	Textblob_analisis_sentimiento.ipynb: pruebas con Textblob para hacer el análisis de sentimiento.
o	Spacy_analisis_sentimiento.ipynb: pruebas con Spacy para generar modelos que se entrenen y sean capaces de predecir el sentimiento de un texto.
o	ScikitLearn_modelos_caracteres_palabras.ipynb: pruebas con Scikit Learn para generar modelos que se entrenen y sean capaces de predecir el sentimiento de un texto.
o	ScikitLearn_seleccion_modelo.ipynb: prueba del modelo con 4 algoritmos de clasificación, y selección del que de mejores resultados para utilizarlo en streaming.
o	Spark_structured_streaming.ipynb: pruebas con Structured streaming. Se obtienen los datos de Kafka como dataframes, y se usa el modelo de clasificación con mejor resultado en las pruebas. El dataframe resultante con el sentimiento se almacena en ElasticSearch para visualizarlo con Kibana, y en MongoDB.
o	Spark_MLlib_analisis_sentimiento.ipynb: pruebas a realizar el preprocesado y calcular el sentimiento de los tweets con Spark ML.
o	Spark_MLlib_structured_streaming.ipynb: pruebas con Structured streaming y Spark ML.
o	Spark_MLlib_structured_streaming_consola.ipynb: pruebas con Structured streaming y Spark ML, para calcular el sentimiento de los tweets en streaming.

# bibliotecas y modulos a utilizar
import sys
import time
from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener


# informacion para conectar con la API
API_KEY = "xxx" # Consumer Key (API Key)
API_SECRET = "xxx" # Consumer Secret (API Secret)
TOKEN_KEY =  "xxx" # Access Token
TOKEN_SECRET = "xxx" # Access Token Secret


# conseguir el OAuth valido para la conexion
def getTwitterOAuth():
	auth = OAuthHandler(API_KEY, API_SECRET)
	auth.set_access_token(TOKEN_KEY, TOKEN_SECRET)
	return auth


# clase listener
class MyListener(StreamListener): 
 	def __init__(self,time_limit=3000, fname="stream_test"):
  		self.time = time.time() 
		self.time_limit = time_limit
		self.outfile = "%s.json" % fname
		print("Downloading stream...")

  
	def on_data(self, data):
  		f = open(self.outfile,'a')
  
		while((time.time() - self.time) < self.time_limit):
   			try:
   				f.write(data)
   				return True
   			except BaseException as e:
   				print("Error: {}\n".format(e))
   				# despues de un error se van a esperar 5 segundos
   				time.sleep(5)
   				return True

		f.close()
		print("Done.")
		exit()

    # funcion para tratar errores
	def on_error(self, status):
		if status == 420:
			print("Rate limit exceeded\n")
			return False
		else:
			print("Error {}\n".format(status))
			return True
    

# main
if __name__ == '__main__':
    # como argumentos se pasan las palabras keywords sobre las que buscar los tweets a obtener 
	query = sys.argv[1:]
	auth = getTwitterOAuth()
	twitter_stream = Stream(auth, MyListener())
	twitter_stream.filter(track=query, async=True)



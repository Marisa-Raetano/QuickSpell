import requests
import json
import sys

response = requests.get("http://quickspell.cs.longwood.edu:5000/specific/kiosk")
print(response.text)

response = requests.post("http://quickspell.cs.longwood.edu:5000/delete/kiosk")
print(response.text)

#response = requests.post("http://quickspell.cs.longwood.edu:5000/insert/kiosk")
#print(response.text)

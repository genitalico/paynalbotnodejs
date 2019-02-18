import requests
import datetime
import json
import os


url = os.environ['PAYNAL_BOT_URL']

payloadModel = {
  'Header': 'Paynal Bot\n',
  'Body': 'Deploy Done\n' + datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
}

payload = json.dumps(payloadModel)

headers = {
    'Content-Type': "application/json",
    'cache-control': "no-cache",
    }

response = requests.request("POST", url, data=payload, headers=headers)

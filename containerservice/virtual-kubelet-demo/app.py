import socket
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
  return ('<html><body>' +
          '<img src="/static/python.jpg" ' +
          'style="max-width: 100%; max-height: 100%;">' +
          '</body></html>')

@app.route("/hostname/")
def return_hostname():
  return "This request is served by host {} to {}".format(socket.gethostname(), request.remote_addr)


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080)

import time
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

HOST_NAME = 'localhost'
PORT_NUMBER = 8080


class MyHandler(BaseHTTPRequestHandler):
    def do_HEAD(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        paths = {
            '/last_hour': {'body': {'test': 'l1'}},
            '/today': {'body': {'test': 't'}},
            '/yesterday': {'body': {'test': 'y'}},
            '/last_three_days': {'body': {'test': '3'}}
        }

        if self.path in paths:
            self.respond(paths[self.path])
        else:
            self.respond({'body': {'test': 'unknown'}})

    def handle_http(self, body):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        return body

    def respond(self, opts):
        response = self.handle_http(opts['body'])
        self.wfile.write(bytes(json.dumps(response), 'UTF-8'))

if __name__ == '__main__':
    server_class = HTTPServer
    httpd = server_class((HOST_NAME, PORT_NUMBER), MyHandler)
    print(time.asctime(), 'Server Starts - %s:%s' % (HOST_NAME, PORT_NUMBER))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print(time.asctime(), 'Server Stops - %s:%s' % (HOST_NAME, PORT_NUMBER))
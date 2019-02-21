import time
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from pathlib import Path

HOST_NAME = 'localhost'
PORT_NUMBER = 8080


class MyHandler(BaseHTTPRequestHandler):
    def do_HEAD(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        paths = {
            '/last_hour': self.get_data('last_hour'),
            '/today': self.get_data('today'),
            '/yesterday': self.get_data('yesterday'),
            '/last_3days': self.get_data('last_3days')
        }

        if self.path in paths:
            self.respond(paths[self.path])
        else:
            self.respond({'error': 'Not Found'})

    def get_data(self, type):
        filename = Path.cwd().joinpath('server_data.json')

        with open(filename) as f:
            data = json.load(f)

        response = {}
        try:
            response["errors"] = data["errors_"+type]
        except (ValueError, KeyError, TypeError):
            print("JSON format error")

        response["data"] = {}
        try:
            for key in list(filter(lambda x: type in x, data["data"][0].keys())):
                response["data"][key] = data["data"][0][key]
        except (ValueError, KeyError, TypeError):
            print("JSON format error")

        return response

    def handle_http(self, body):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        return body

    def respond(self, opts):
        response = self.handle_http(opts)
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
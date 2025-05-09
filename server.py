from flask import Flask, render_template
from flask_socketio import SocketIO
import random
import os

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return "Socket server is running. Use a WebSocket client to connect."

@socketio.on('connect')
def handle_connect():
    print('Client connected')
    # Generate a random number
    random_number = random.randint(1, 100)
    # Send the random number to the client
    socketio.emit('random_number', {'number': random_number})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting server on port {port}")
    socketio.run(app, host='0.0.0.0', port=port) 
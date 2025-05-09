import socketio
import time

# Create a Socket.IO client
sio = socketio.Client()

@sio.event
def connect():
    print('Connected to server')

@sio.event
def disconnect():
    print('Disconnected from server')

@sio.event
def random_number(data):
    print(f"Received random number from server: {data['number']}")
    # Disconnect after receiving the number
    sio.disconnect()

if __name__ == '__main__':
    try:
        # Connect to the server
        print("Attempting to connect to the server...")
        sio.connect('https://salty-boiling-ulna.glitch.me')
        
        # Wait for a bit to receive the response
        time.sleep(5)
        
        # Disconnect if not already disconnected
        if sio.connected:
            sio.disconnect()
    except Exception as e:
        print(f"Error: {e}") 
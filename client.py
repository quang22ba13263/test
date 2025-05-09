import socket
import os

# Create a socket object
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
# Note: Glitch typically uses a different port assigned by environment variable
# For local testing, you might need to update this port to match what Glitch assigns
glitch_domain = 'salty-boiling-ulna.glitch.me'
port = 443  # Glitch typically exposes HTTPS port 443 for WebSocket connections

print(f"Attempting to connect to {glitch_domain}:{port}")
server_address = (glitch_domain, port)

try:
    client.connect(server_address)
    
    # Receive data from the server
    data = client.recv(1024)
    print(f"Received random number from server: {data.decode()}")
    
    # Close the connection
    client.close()
except Exception as e:
    print(f"Error connecting to server: {e}") 
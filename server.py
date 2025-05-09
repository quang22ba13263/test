import socket
import random

# Create a socket object
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to a specific address and port
server.bind(('0.0.0.0', 5000))

# Listen for incoming connections
server.listen(5)
print("Server is listening on port 5000...")

while True:
    # Accept a client connection
    client, address = server.accept()
    print(f"Connected to {address}")
    
    # Generate a random number
    random_number = random.randint(1, 100)
    
    # Send the random number to the client
    client.send(str(random_number).encode())
    
    # Close the client connection
    client.close() 
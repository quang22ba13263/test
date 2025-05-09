import socket

# Create a socket object
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
# Replace 'your-server-address.glitch.me' with your actual Glitch.me server address
server_address = ('your-server-address.glitch.me', 5000)
client.connect(server_address)

# Receive data from the server
data = client.recv(1024)
print(f"Received random number from server: {data.decode()}")

# Close the connection
client.close() 
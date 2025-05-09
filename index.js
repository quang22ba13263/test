// Simple HTTP server that returns a random number
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Set CORS headers to allow all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle different routes
  if (req.url === '/') {
    // Return a simple HTML page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simple Server Test</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          .result { margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9; }
        </style>
      </head>
      <body>
        <h1>Socket Connection Test</h1>
        <p>This is a simple server that generates a random number.</p>
        <div class="result">Click the button to get a random number.</div>
        <button id="getNumber">Get Random Number</button>
        
        <script>
          document.getElementById('getNumber').addEventListener('click', async () => {
            const response = await fetch('/random');
            const data = await response.json();
            document.querySelector('.result').textContent = 'Random number: ' + data.number;
          });
        </script>
      </body>
      </html>
    `);
  } else if (req.url === '/random') {
    // Return a random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ number: randomNumber }));
  } else {
    // Handle 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
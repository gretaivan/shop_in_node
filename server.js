const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000; 

const server = http.createServer(app);  // requires listener that it listens to

server.listen(port, () => console.log(`[SERVER] : API Server is listening on port ${port}`)); 
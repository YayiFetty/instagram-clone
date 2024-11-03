const jsonServer = require('@/json-server.mjs');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'assets', 'posts.json')); // Adjust the path if needed
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});

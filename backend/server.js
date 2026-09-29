// Server is Start in this Server.js file

const app = require("./src/app");

app.get('/', (req, res) => {
  res.send('Hello, I have been learning Node.js for a week!'); // Send a response for the root route
});

app.get('/about', (req, res) => {
  res.send('About Page'); // Send a response for the about route
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
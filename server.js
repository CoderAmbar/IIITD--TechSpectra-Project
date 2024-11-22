const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from public folder

// Signup route
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  // Save user data to database (here, we're simulating a DB with an array)
  const users = [];
  users.push({ username, email, password });
  res.status(200).send({ message: 'Signup successful' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

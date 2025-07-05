// app.js

const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from 'public' folder (for CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy login check
  if (username === 'admin' && password === 'admin') {
    res.send(`<h2>Welcome, ${username}!</h2><p>Login successful.</p>`);
  } else {
    res.send('<h2>Login failed</h2><p>Invalid credentials.</p><a href="/">Try Again</a>');
  }
});

// Start server on localhost:3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`File Manager app is running at http://localhost:${PORT}`);
});

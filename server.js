const express = require('express');
const app = express();

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Create 10 routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

app.get('/products', (req, res) => {
  res.send('Our Products');
});

app.get('/services', (req, res) => {
  res.send('Our Services');
});

app.get('/blog', (req, res) => {
  res.send('Our Blog');
});

app.get('/login', (req, res) => {
  res.send('Login');
});

app.get('/signup', (req, res) => {
  res.send('Sign Up');
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

app.get('/profile', (req, res) => {
  res.send('Profile');
});

// Use different templates in different routes
app.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Gallery' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

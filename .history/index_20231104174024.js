const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'dist', 'church_billboard_front_app')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'church_billboard_front_app', 'index.html'));
});

// Define your other server-side routes and APIs here if needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

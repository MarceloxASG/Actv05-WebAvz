const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { welcomeMessage: 'Bienvenidos a los motores de plantilla' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

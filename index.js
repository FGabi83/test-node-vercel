const express = require('express');
const app = express();
const port = 3000;

// Pug beállítása
app.set('view engine', 'pug');
app.set('views', './views');

// Controller
const controller = {
  homePage: (req, res) => {
    res.render('index');
  },
};

// Routes
app.get('/', controller.homePage);

// Szerver indítása
app.listen(port, () => {
  console.log(`Az alkalmazás fut a http://localhost:${port} címen.`);
});

const express = require('express');
const app = express();

const PORT = 3005;

app.set('view engine', 'pug');
app.use(express.static('src'))

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }

  console.log(`Server listening on ${PORT}`);
});

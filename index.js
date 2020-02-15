require('dotenv').config();
const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const { DB, PORT } = process.env;
const bodyParser = require('body-parser');

const app = express();
// app.use(express.json());
// app.use
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(morgan('dev'));
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => console.log(err));
app.use(passport.initialize());
require('./config/passport')(passport);
if (process.env.NODE_ENV === 'production') {
  //set a static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/api/users'));
app.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🔥`));

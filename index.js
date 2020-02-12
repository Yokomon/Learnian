// import dependenc
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const morgan = require('morgan');
// import constant from dotenv
const { DB, PORT } = process.env;
const app = express();
// using middleware for bodyParser
app.use(express.json);
// connecting to the database
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => console.log(err));
// line for deployment
if (process.env.NODE_ENV === 'production') {
  //set a static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use('/api/users', require('./routes/api/users'));

// starting server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🔥`));

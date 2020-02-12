require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// const morgan = require('morgan');
const { DB, PORT } = process.env;
const app = express();
app.use(express.json);
// mongoose
//   .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to DB');
//   })
//   .catch(err => console.log(err));
if (process.env.NODE_ENV === 'production') {
  //set a static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🔥`));

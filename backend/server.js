const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
const path = require('path');

// database connection
require('./config/database');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(
  cors(
    {
      origin: '*', // ! edit later
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  )
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const roomsRouter = require('./routes/rooms');
const staffRouter = require('./routes/staff');
const reservationsRouter = require('./routes/reservations');

app.use('/rooms', roomsRouter);
app.use('/staff', staffRouter);
app.use('/reservations', reservationsRouter);

const port = 9999;

app.listen(process.env.PORT || port, () => {
  console.log(`app running on port ${port}`)
})
// Create web server

// 1. Load modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// 2. Create an instance of express
const app = express();

// 3. Add middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// 4. Create a route handler
app.get('/', (req, res) => {
  res.send('Comments server');
});

// 5. Start the server
app.listen(4001, () => {
  console.log('Comments server started on port 4001');
});

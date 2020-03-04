const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3999;

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/echo', (req, res, err) => {
  res.status(200).json({
    success: true,
    req_headers: req.headers,
    req_body: req.body
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}...`);
});

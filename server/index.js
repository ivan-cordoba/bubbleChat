const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

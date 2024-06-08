const express = require('express');
const router = require('./controller');
const app = express();
const cors = require('cors');
const PORT = 3001;

//cors enabled
app.use(cors());

app.use('/controller', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

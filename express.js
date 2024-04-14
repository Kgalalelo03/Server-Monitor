const express = require('express');
const statusMonitor = require('express-status-monitor');
const app = express();
const port = 3000;


app.use(statusMonitor());


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

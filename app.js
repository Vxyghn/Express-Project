const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.static('content'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
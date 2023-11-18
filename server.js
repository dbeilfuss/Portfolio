const express = require("express");
const app = express();
const port = 80;

// Serve static files from the 'public' directory
app.use(express.static("/public"));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require("express");
const app = express();
const port = 3000;

// include and initialize the rollbar library with your access token
// var Rollbar = require("rollbar");
// var rollbar = new Rollbar({
//   accessToken: "8abf7cdc6a8740d5b076c52dc32c8bc7",
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// });

// record a generic message and send it to Rollbar
// rollbar.log("Hello world!");

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}/`);
});

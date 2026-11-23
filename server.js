const express = require('express');
//Add path here
const app = express();

const web_files = express.static("public");

app.use(web_files);

//Add multi-page functionality here

app.listen(process.env.PORT || 3000, function() {
   console.log("Listening on port 3000...");
});
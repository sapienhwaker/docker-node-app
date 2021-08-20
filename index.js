const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("<h2>I am India</h2>");
});

const port = process.env.PORT || 3000; //either pick the port mentioned in the environment variables or 3000'''

app.listen(port, () => console.log(`listening on port ${port}`));


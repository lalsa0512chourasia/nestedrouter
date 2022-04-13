const express = require("express");
const cors = require("cors");
// const mainRouter = require("./routes/index.js")
const mainRouter = require("./routes")


const app = express();
app.use(cors());

app.use("/api/v1", mainRouter);

app.listen(process.env.PORT || 4000, ()=>{
    console.log("Application is started");
})
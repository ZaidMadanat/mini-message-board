const express = require("express");
const app = express(); 
const indexRouter = require("./routes/indexRouter");
const path = require("node:path"); 

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 

app.use("/", indexRouter);

app.get("/")

const PORT = 3000; 
app.listen(PORT);
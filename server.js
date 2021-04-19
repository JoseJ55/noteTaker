const express = require("express");
const api = require("./routes/apiRoutes");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api", api);

app.listen(PORT, ()=> console.log(`Sever runing on Port ${PORT}`))


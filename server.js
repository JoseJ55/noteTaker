const express = require("express");
const api = require("./routes/apiRoutes");
const hmtlRoute = require("./routes/htmlRoutes")
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(cors());


app.use("/", hmtlRoute);
app.use("/notes", hmtlRoute);
app.use("/notes", api)
app.use("/api/notes", api);
app.use("/", api) // need to find why this one works with post




app.listen(PORT, ()=> console.log(`Sever runing on Port ${PORT}`))

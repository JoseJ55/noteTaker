const express = require("express");
const api = require("./routes/apiRoutes");
const hmtlRoute = require("./routes/htmlRoutes")
const bodyParser = require("body-parser")

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
// app.use(bodyParser)

app.post("/api/notes", (req, res) => {
    console.log(req.body)
})

app.use("/api", api);
app.use("/", hmtlRoute);
app.use("/api/notes", hmtlRoute)

app.listen(PORT, ()=> console.log(`Sever runing on Port ${PORT}`))


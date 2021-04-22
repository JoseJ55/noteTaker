const express = require("express");
const api = require("./routes/apiRoutes");
const hmtlRoute = require("./routes/htmlRoutes")
const bodyParser = require("body-parser")

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

app.set('view engine', 'ejs')

app.use("/api/notes", api);
// app.use("/", hmtlRoute);
// app.use("/api/notes", hmtlRoute)

app.listen(PORT, ()=> console.log(`Sever runing on Port ${PORT}`))

// look up router.get data is in wrong places and doesn't appear corectly whenin the right place.
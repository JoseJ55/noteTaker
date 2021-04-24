const express = require("express");
const api = require("./routes/apiRoutes");
const hmtlRoute = require("./routes/htmlRoutes")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();
const PORT = 3001;


// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(cors());


app.use("/", hmtlRoute);
app.use("/notes", hmtlRoute);
app.use("/api/notes", api);
// app.set('view engine', 'ejs')



app.listen(PORT, ()=> console.log(`Sever runing on Port ${PORT}`))

// look up router.get data is in wrong places and doesn't appear corectly whenin the right place.
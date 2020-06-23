const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

//pra quando o front for fazer requisições na api
app.use(cors());

//pra entender requisições no formato json
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

// db config
mongoose
    .connect("mongodb://localhost/tcc-app", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB on"))
    .catch((err) => console.error(err));

// routes config
app.use(routes);

app.listen(PORT, () => {
    console.log("Server On");
});

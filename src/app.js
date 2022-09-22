const express = require("express");
const cors = require("cors");
const alumnRoutes = require("./routes/alumns.routes");
const signedRoutes = require("./routes/signed.routes");
const givenRoutes = require("./routes/given.routes");
const averageRoutes = require("./routes/average.routes");
const marksRoutes = require("./routes/marks.routes");

const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3306);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(alumnRoutes);
app.use(givenRoutes);
app.use(signedRoutes);
app.use(averageRoutes);
app.use(marksRoutes)
app.use(function (request, response, next) {
    response.status(404).json({
        error: true,
        codigo: 404,
        message: "Endpoint doesnt found"
    })
});
app.use(errorHandling);

module.exports = app
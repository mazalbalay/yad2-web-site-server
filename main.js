const express = require("express");
const cors = require("cors")
var bodyParser = require('body-parser')
const routerCars = require('./routers/routerCars');
const routerFurnitures = require('./routers/routerFurnitures');
const routerOther = require('./routers/routerOther');
const routerUser = require('./routers/routerUser');


require("./config/config")


const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors())
app.use(express.json())


app.use('/', routerCars);
app.use('/', routerFurnitures);
app.use('/', routerOther);
app.use('/', routerUser);

app.listen(8000, ()=>console.log("app listen"))
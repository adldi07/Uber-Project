const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db.js");
const userRoutes = require('./routes/user.routes.js');
const captianRoutes = require('./routes/captian.routes.js');

connectToDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/",(req,res)=>{
    console.log("Server is started");
    res.send("Hello form server");
});

app.use('/users', userRoutes);
app.use('/captian', captianRoutes);

module.exports = app;
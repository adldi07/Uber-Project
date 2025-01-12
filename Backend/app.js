const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db.js");
const userRoutes = require('./routes/user.routes.js');

connectToDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    console.log("Server is started");
    res.send("Hello form server");
});

app.use('/users', userRoutes);

module.exports = app;
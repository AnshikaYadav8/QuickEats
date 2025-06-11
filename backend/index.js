/*const express = require("express");
const app = express();
const PORT = 5000;
const mongoDB = require("./db");
mongoDB();

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));

app.use('/api', require("./Routes/DisplayData"));

app.use('/api', require("./Routes/OrderData"));

app.get("/", (req, res) => {
    res.send("Welcome to my website!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});*/

const express = require("express");
const cors = require("cors");
const mongoDB = require("./db");

const app = express();
const PORT = 5000;

mongoDB();

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData")); 
app.use('/api', require("./Routes/OrderData"));

app.get("/", (req, res) => {
    res.send("Welcome to my website!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


const todos = require("./routes/todos");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");



require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todos);
app.use("/api/signup", signUp);
app.use("/api/signin", signIn);


app.get("/", (req,res)=>{
    res.send("Welcome!");
});



const connection_string = process.env.CONNECTION_STRING;

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  
mongoose.connect(connection_string, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=> console.log("MongoDB connection eshtablished"))
.catch((error) => console.log("MongoDB connection failed:", error.message))
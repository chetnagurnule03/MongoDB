const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser"); 
const app = express(); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static("public")); 
// MongoDB Connection 
//past your database link in yellow line  
mongoose.connect("mongodb+srv://chetnagurnule10_db_user:RshpbPllNwP8dF25@cluster0.k0lfhhx.mongodb.net/?appName=Cluster0") 
.then(() => console.log("MongoDB Connected ✅")) 
.catch(err => console.log("Error:", err)); 
const contactSchema = new mongoose.Schema({ 
  name: String, 
  email: String, 
  message: String 
}); 
const Contact = mongoose.model("Contact", contactSchema); 
app.post("/submit", async (req, res) => { 
  console.log(req.body); // Debug 
  const data = new Contact({ 
    name: req.body.name, 
    email: req.body.email, 
    message: req.body.message 
  }); 
  try { 
    await data.save(); 
    res.send("Data Saved Successfully ✅"); 
  } catch (err) { 
    console.log(err); 
    res.send("Error saving data ✅"); 
} 
}); 
app.listen(3000, () => { 
console.log("Server running at http://localhost:3000"); 
}); 
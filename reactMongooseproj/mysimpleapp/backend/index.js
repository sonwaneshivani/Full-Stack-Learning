// Step-1 : connect
// Step-2 : Schema
// Step-3 : Collection name
// Step-4 : http://// /newuser... -> add the user -- to the mongodb

// Require mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myfirstdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // Increase the timeout value (in milliseconds)
})
  .then(() => {
    console.log('MongoDB connected successfully');
    // Your server setup code can go here
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('User', UserSchema);

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password; // Assuming there's a password field
            resp.status(200).json({ message: "Data saved successfully", user: result });
        } else {
            console.log("User already registered");
            resp.status(400).json({ message: "User already registered" });
        }
    } catch (error) {
        console.error("Error saving data:", error);
        resp.status(500).json({ message: "Internal server error" });
    }
});

app.listen(5000);

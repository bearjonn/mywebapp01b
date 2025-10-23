// Import Express.js module
import express from "express";

import path from "path";
const __dirname = path.resolve();

// Initialize the Express application
const app = express();

// Serve static files (like images) from the 'public' directory
app.use(express.static("public"));

// Define the port number for the server to listen on
const port = parseInt(process.env.PORT) || 8080;

// Define a route for the root URL ('/') and specify the response
app.get('/', (req, res) => {
  res.send("Hello, World!"); // Send "Hello, World!" as the response
});

app.get("/index", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/galaxian1", function(req, res){
    res.sendFile(path.join(__dirname, "galaxian1.html"));
});

app.get("/galaxian2", function(req, res){
    res.sendFile(path.join(__dirname, "galaxian2.html"));
});

app.get("/galaxian3", function(req, res){
    res.sendFile(path.join(__dirname, "galaxian3.html"));
});

app.get("/galaxian4", function(req, res){
    res.sendFile(path.join(__dirname, "galaxian4.html"));
});

app.get("/galaxian5", function(req, res){
    res.sendFile(path.join(__dirname, "galaxian5.html"));
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port); // Log a message to the console indicating the server is running
});

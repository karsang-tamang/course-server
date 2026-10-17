require("dotenv").config();

const express = require("express");
const path = require("path");
const { uploadFile } = require("./storage"); // Import Backblaze storage helper

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// 1. MIDDLEWARE: Body Parsers & Static Files
// ==========================================
// Handles incoming HTML form data (urlencoded) and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves all static files (HTML, CSS, client JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


// ==========================================
// 2. ROUTES & MILESTONE IMPLEMENTATIONS
// ==========================================

// Route to serve an HTML Form (Requirement: Serve at least one HTML form)
app.get("/contact", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Feedback | Real Madrid</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body style="padding: 40px; font-family: Arial, sans-serif;">
        <div style="max-width: 500px; margin: auto; background: white; padding: 30px; border-radius: 10px; border: 1px solid #ddd;">
          <h2 style="color: #00529f;">Real Madrid Fan Feedback</h2>
          <form action="/submit-feedback" method="POST">
            <label style="display: block; margin-bottom: 10px;">
              Your Name:<br>
              <input type="text" name="username" required style="width: 100%; padding: 8px; margin-top: 5px;">
            </label>
            <label style="display: block; margin-bottom: 15px;">
              Favorite Player / Comments:<br>
              <textarea name="comment" required style="width: 100%; padding: 8px; margin-top: 5px; height: 80px;"></textarea>
            </label>
            <button type="submit" style="background: #00529f; color: white; border: none; padding: 10px 20px; font-weight: bold; border-radius: 5px; cursor: pointer;">Submit Feedback</button>
          </form>
          <p style="margin-top: 20px;"><a href="/" style="color: #00529f; text-decoration: none;">← Back to Home</a></p>
        </div>
      </body>
    </html>
  `);
});

// Handle HTTP-Body from form submission & save to Backblaze B2 (Requirement: Handle http-bodies)
app.post("/submit-feedback", async (req, res) => {
  try {
    const { username, comment } = req.body;

    // Create a unique JSON file name and format the payload
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `feedback-${timestamp}-${username.replace(/\s+/g, "_")}.json`;
    
    const feedbackData = JSON.stringify({
      username,
      comment,
      submittedAt: new Date().toISOString()
    }, null, 2);

    // Upload directly to Backblaze B2 via storage.js
    await uploadFile(fileName, feedbackData, "application/json");

    res.send(`
      <body style="padding: 40px; font-family: Arial, sans-serif; text-align: center;">
        <h2 style="color: #00529f;">Thank you, ${username}!</h2>
        <p>Your feedback has been securely uploaded and stored in Backblaze B2.</p>
        <a href="/contact" style="color: #00529f;">Submit Another</a> | 
        <a href="/" style="color: #00529f;">Return Home</a>
      </body>
    `);
  } catch (error) {
    console.error("Error saving feedback to cloud:", error);
    res.status(500).send(`<h2>Error saving feedback to cloud storage. Please try again.</h2><a href="/contact">Back</a>`);
  }
});

// Route with Route Parameters (Requirement: Handle route parameters)
app.get('/api/players/:id', (req, res) => {
  const playerId = req.params.id;
  res.json({ success: true, requestedPlayerId: playerId });
});

// Route with Query Parameters (Requirement: Handle querystring parameters)
app.get('/api/search', (req, res) => {
  const query = req.query.q || "";
  res.json({ success: true, searchQuery: query, message: `Searched for query: ${query}` });
});

// Trigger file download at the client (Requirement: Trigger download of files at client)
app.get('/api/download-badge', (req, res) => {
  const filePath = path.join(__dirname, 'image.png');
  res.download(filePath, 'real-madrid-badge.png', (err) => {
    if (err) {
      console.error("Download error:", err);
    }
  });
});

// Existing API endpoints supporting AJAX fetch calls from client
app.get('/api/getName', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ name: 'Real Madrid' }); 
});

app.get('/api/getImage', (req, res) => {      
  res.set('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(__dirname, 'image.png'));
});

// Route to test the 500 Error Handler
app.get('/test-error', (req, res, next) => {
  const error = new Error("Simulated Server Error for testing!");
  next(error);
});


// ==========================================
// 3. CUSTOM ERROR HANDLERS (404 & 500)
// ==========================================

// Custom 404 Not Found Handler (Requirement: Custom 404 handler)
app.use((req, res, next) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head><title>404 Not Found</title></head>
      <body style="font-family: Arial; text-align: center; padding: 60px; background: #f5f5f5;">
        <h1 style="color: #00529f; font-size: 3rem;">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist in the Real Madrid hub.</p>
        <a href="/" style="color: #00529f; font-weight: bold; text-decoration: none;">← Return to Home</a>
      </body>
    </html>
  `);
});

// Custom 500 Internal Server Error Handler (Requirement: Custom 500 handler)
app.use((err, req, res, next) => {
  console.error("Captured Server Error:", err.stack);
  res.status(500).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head><title>500 Server Error</title></head>
      <body style="font-family: Arial; text-align: center; padding: 60px; background: #f5f5f5;">
        <h1 style="color: #d9534f; font-size: 3rem;">500</h1>
        <h2>Internal Server Error</h2>
        <p>Something went wrong on our server. Please try again later.</p>
        <a href="/" style="color: #00529f; font-weight: bold; text-decoration: none;">← Return to Home</a>
      </body>
    </html>
  `);
});


// ==========================================
// 4. START SERVER
// ==========================================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
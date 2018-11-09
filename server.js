// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
let reservations = [
  {
    name: "yoda",
    number: "Yoda",
    email: "Jedi Master",
    uniqueID: 900,
    
  },
  {
    name: "yoda",
    number: "Yoda",
    email: "Jedi Master",
    uniqueID: 900,
  },
  {
    name: "yoda",
    number: "Yoda",
    email: "Jedi Master",
    uniqueID: 900,
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/view", (req, res) => {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (const i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newReserve = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReserve);

  reservations.push(newReserve);

  res.json(newReserve);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
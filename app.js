const express = require("express")
const contacts = require("./contacts.json")
const app = express()
const PORT = 5000

app.get("/contacts", (req, res) => res.json(contacts))

app.post("/api/like", (req, res) => res.json({ message: "Liked" }))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
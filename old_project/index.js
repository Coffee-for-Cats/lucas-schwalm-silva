const express = require("express")
const app = express()
const path = require("path")

//just so I can serve any document staticaly
app.use(express.static(path.join(__dirname, "static")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/static/main.html"))
})

//Google Verification
app.get("/googleabae759de29b6157.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/googleabae759de29b6157.html"))
})

app.listen(5000, () => console.log("Running on port 5000"))
module.exports = app;
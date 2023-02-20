const express = require("express")
const app = express()
const path = require("path")

//just so I can serve any document staticaly
app.use(express.static(path.join(__dirname, "static")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/static/main.html"));
})

app.listen(3000, () => console.log("Running on port 3000"));
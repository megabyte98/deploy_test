const path = require("path")
const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const PORT = process.env.PORT || 5000
const path = require("path");
const app = express()

// connect Database
connectDB()

app.use(express.json())
app.use(cors())

// routes
app.use("/api/user", require("./routes/user"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/booking", require("./routes/booking"))
app.use("/api/hall", require("./routes/hall"))


app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../build')) })

app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log(`Server is listening on port ${PORT}`)
  }
})

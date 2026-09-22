const express = require("express")
const PORT = 8080

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Express!!")
})

app.get("/greet", (req, res) => {
  res.json({ message: "Data Received", data: `Hello ${req.query.name}` })
})

app.get("/getByNameAndProfession", (req, res) => {
  const { name, profession } = req.query
  res.json({ message: "Data Received", data: `${name}${" " + profession}` })
})

app.get("/updated", (req, res) => {
  const { fruits } = req.query
  console.log(fruits)
  res.json({ message: "Data Received", data: fruits })
})

app.post("/greet", (req, res) => {
  res.json({ message: "Data Received", data: `Hello ${req.body.name}` })
})

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`)
})

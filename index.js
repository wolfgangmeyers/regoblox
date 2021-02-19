
const OpaCompileResponseParser = require('opa-compile-response-parser')
const parser = new OpaCompileResponseParser.default()

const express = require('express')
const app = express()

const port = process.env['PORT'] || 1337




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/ast', (req, res) => {
    console.log(req)
    res.send("")
})

app.use("/media", express.static("static/media"))
app.use("/static", express.static("static"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

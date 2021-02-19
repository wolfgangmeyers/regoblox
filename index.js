const express = require('express')
const { exec } = require("child_process");
const app = express()
var bodyParser = require('body-parser')
const port = process.env['PORT'] || 1337

const OpaParser = require("opa-compile-response-parser")


app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/plain' }))

app.post('/xml', (req, res) => {
    /*

    */
    console.log(req.body.toString('utf8'))
    res.send("")
})

app.post('/rego', (req, res) => {
    /*

    */
    const policyString = req.body.toString('utf8')
    res.send("")
})

app.use("/media", express.static("static/media"))
app.use("/static", express.static("static"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

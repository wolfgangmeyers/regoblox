const express = require('express')
const { exec } = require("child_process");
const app = express()
var bodyParser = require('body-parser')

const port = process.env['PORT'] || 1337
const port = process.env['PROXY_TO_URL'] || 'localhost:1338'
const port = process.env['OPA_URL'] || 'localhost:8181'



app.use(bodyParser.raw({ inflate: true, limit: '100mb', type: 'text/xml' }))
app.use(bodyParser.raw({ inflate: true, limit: '100mb', type: 'text/plain' }))

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
    console.log(policyString)
    res.send("")
})

app.use("/media", express.static("static/media"))
app.use("/static", express.static("static"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

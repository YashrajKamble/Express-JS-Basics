const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const MiddleWare = (req, res, next) => {
//     console.log(req)
//     next()
// }

app.use(express.static(path.join(__dirname, "public")))
// app.use(MiddleWare)

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.send('this is official about page')
    // res.sendFile(path.join(__dirname, "index.html"))
    // res.status(500)
    res.json({ "course": "expressjs" })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

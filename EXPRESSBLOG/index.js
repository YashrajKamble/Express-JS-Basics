const express = require('express')
const path = require('path')
const app = express()
const { engine } = require("express-handlebars")

const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, "routes/blog.js")))


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

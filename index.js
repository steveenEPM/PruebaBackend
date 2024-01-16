const express = require('express')
const { urlencoded, json } = express

const { routes } = require('./src/routes/routes')

const app = express()
const PORT = 3030


app.use(urlencoded({ extended: true }))
app.use(json())

app.use('/',routes)

app.listen(PORT,()=> console.log(`Server UP ${PORT}`))



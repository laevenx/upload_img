const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const router = require('./router')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(PORT, _=> { console.log( ` listening on port ${ PORT }`)} )
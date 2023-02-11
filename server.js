const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT


const app = express()

app.get('/', (request, reresponses) => {
  response.send('Hello, Lads !')
})

app.get('/home', (request, reresponses) => {
  response.send('Welcome To The Home Page Lads !')
})

app.listen(PORT, () => {
console.log(`app listening on port ${PORT}`)
  
})

module.exports = app;

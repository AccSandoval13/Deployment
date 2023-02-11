const express = require('express')
const PORT = process.env.PORT
require('dotenv').config()


const app = express()

app.get('/', (request, response) => {
  res.send('Hello, Lads !')
})

// app.get('/home', (request, reresponses) => {
//   response.send('Welcome To The Home Page Lads !')
// })

app.listen(PORT, () => {
console.log(`app listening on port ${PORT}`)
  
})

module.exports = app

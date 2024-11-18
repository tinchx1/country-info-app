const express = require('express')
const app = express()
const port = 3003

const countriesRouter = require('./routes/countries')

app.use('/api', countriesRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

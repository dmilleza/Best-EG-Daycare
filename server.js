const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static('dist'))

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
)

app.get('/about', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'dist/about.html'))
)

app.get('/photos', (req, res) =>
  res.sendFile(path.join(__dirname, 'dist/photos.html'))
)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
)

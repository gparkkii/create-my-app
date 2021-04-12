const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const port = 5000;

app.listen(port, () => {
  console.log(`create-my-app listening at http://localhost:${port}`)
})
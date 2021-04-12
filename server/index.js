const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect( config.mongoURI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
).then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const port = 5000;

app.listen(port, () => {
  console.log(`create-my-app listening at http://localhost:${port}`)
})
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public')))


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })


app.listen(1337, () =>
    console.log(`listening to port 1337`)
  )
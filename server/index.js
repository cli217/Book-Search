const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '../public')))


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

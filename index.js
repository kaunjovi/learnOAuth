var express = require('express')
  , logger = require('morgan')
  , app = express()

app.get('/', function (req, res) {

    res.send( 'Hello Heroku.')
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 5000))
})
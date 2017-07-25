'use strict';

const express = require('express');

const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./'));

app.get('/new', function(request, response){
  console.log('request sent');
  response.sendFile('/index.html', {root: './'});
});

app.post('./articles', bodyParser, function(request, response){
  console.log(request.body);
  response.send('Record Posted');
});

app.listen(PORT, function(){
  console.log(`Listen to port: ${PORT}`);
})

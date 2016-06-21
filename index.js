var express = require('express');
var app = express();
var url = require('url');
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001)); // in production, use the [PORT] env variable

// Just for grins, show text when visiting root of the app
app.get('/', function(req, res){
  res.send('It works!');
});

// All Slack Slash commands send a POST
app.post('/post', function(req, res){
  // req.body.text is the slash command

  // var parsed_url = url.format({
  //   pathname: 'https://api.genius.com/search',
  //   query: {
  //     access_token: process.env.GENIUS_ACCESS,
  //     q: req.body.text
  //   }
  // });

  var first_url = "Whatever.";

  // request(parsed_url, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var data = JSON.parse(body);
  //     var first_url = data.response.hits[0].result.url;

       var body = {
         response_type: "in_channel",
         text: first_url
       };

       res.send(body);
  //   }
  // });
});

// Tell node which port to listen on
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
